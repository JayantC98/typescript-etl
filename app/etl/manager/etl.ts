import {ETL} from "./types";
import {ETLRecords} from "../record/types";
import {Transform} from "../transformer/types";
import {Loader} from "../loader/types";
import {Extractor} from "../extractor/types";

export class ETLManager implements ETL{
    Extractor: Extractor;
    Loaders: Loader[];
    Transformers: Transform[];
    constructor(extractor: Extractor, loader: Loader[], transformer: Transform[]) {
        this.Extractor = extractor
        this.Loaders = loader
        this.Transformers = transformer
    }

    async Init(): Promise<void> {
        const promiseList: Promise<void>[] = []
        promiseList.push(this.Extractor.init())
        this.Loaders.forEach((loader) => {
            promiseList.push(loader.init())
        })
        this.Transformers.forEach((transformer) => {
            promiseList.push(transformer.init())
        })
        await Promise.all(promiseList)
    }

    async Run(): Promise<ETLRecords> {
        let extractionResp = await this.Extractor.extract()

        // base inits
        let transformationResp: ETLRecords = extractionResp
        let loaderResp: ETLRecords = transformationResp


        for (const transformer of this.Transformers) {
            transformationResp = await transformer.transform(extractionResp)
        }
        if (transformationResp!==null){
            for (const loader of this.Loaders) {
                loaderResp = await loader.load(transformationResp)
            }
        }

        return loaderResp
    }
}