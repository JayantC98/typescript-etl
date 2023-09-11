export enum Status {
    SUCCESS = 0,
    FAILURE = 0,
}

export interface ETLRecord{
    id: string
    value: any
    status: RecordsStatus
    setETLRecord(id: string, value: any): void
    getETLRecord(): ETLRecord
}

export interface ETLRecords {
    records: ETLRecord[]
}

export class RecordsStatus{
    private status: Status
    private failureReason: string|undefined

    constructor(status: Status, failureReason?: string) {
        this.status = status
        this.failureReason=failureReason
    }

    updateStatus(status: Status, failureReason?: string): void{
        this.status = status
        this.failureReason = failureReason
    }

    getStatus(): Status{
        return this.status
    }

    getFailureReason(): string|undefined{
        return this.failureReason
    }
}

