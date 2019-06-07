import lodash from "lodash";
export const action = (type, payload = {}) => ({ type, payload });

export const mergeRecords = (state = {}, records = [], key = "id") => {
    records = lodash.isArray(records) ? records : [records];
    if (!(records && records.length)) return state;

    const ns = records.reduce((acc, record) => {
        const id = record[key];
        const prevRecord = state[id] || {};
        acc[record[key]] = {
            ...prevRecord,
            ...record
        };
        return acc;
    }, {});

    return {
        ...state,
        ...ns
    };
};

export const removeRecords = (state = {}, records = [], key = "id") => {
    records = lodash.isArray(records) ? records : [records];
    if (!(records && records.length)) return state;

    const ids = records.map(record => record[key]);

    return lodash.omit(state, ids);
};
