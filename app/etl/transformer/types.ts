import {ETLRecords} from "../record/types";

export interface Transform {
    transform(records: ETLRecords): Promise<ETLRecords>,
    init(): Promise<void>,
    handleErrors(erroredOut: ETLRecords): Promise<ETLRecords>
}