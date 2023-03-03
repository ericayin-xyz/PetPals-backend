const search = [
    {
        search_id: 1,
        anminal_type: 'dog',
        service: 'dog walking',
        postcode: '2000'
    },
    {
        search_id: 2,
        anminal_type: 'cat',
        service: 'feeding',
        postcode: '2032'
    },
]

function getSearch() {
    return search
} 

function getStepById(stepId) {
    const step = search[stepId]
    return step
}
module.exports = {
    getSearch,
    getStepById
}