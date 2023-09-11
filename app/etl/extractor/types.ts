import {ETLRecords} from "../record/types";

export interface Extractor {
    extract(): Promise<ETLRecords>,
    init(): Promise<void>
    handleErrors(erroredOut: ETLRecords): Promise<ETLRecords>
}