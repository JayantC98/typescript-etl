import {ETLRecords} from "../record/types"
import {Transform} from "../transformer/types";
import {Loader} from "../loader/types";
import {Extractor} from "../extractor/types";

export interface ETL{
    Extractor: Extractor,
    Loaders: Loader[],
    Transformers: Transform[],
    Init(): Promise<void>,
    Run(): Promise<ETLRecords>,
}