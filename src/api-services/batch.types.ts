export type UpdateBranch = {
    startTime: {
        hour: number;
        minute: number;
    };
    endTime: {
        hour: number;
        minute: number;
    };
    name: string;
    batchLimit: number;
};

export type CreateBatch = {
    startTime: {
        hour: number;
        minute: number;
    };
    endTime: {
        hour: number;
        minute: number;
    };
    name: string;
    batchLimit: number;
    id: string;
};