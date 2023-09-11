import {ETLRecords} from "../record/types";

export interface Loader {
    load(records: ETLRecords): Promise<ETLRecords>,
    init(): Promise<void>,
    handleErrors(erroredOut: ETLRecords): Promise<ETLRecords>
}