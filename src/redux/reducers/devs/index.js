import { actionsDevs } from '../../actions/actionsTypes'

const initialState = {
    devs: [],
    selectedDevs: {},
    skillsDevs: [],
    positionsDevs: [],
    changeDev: {},
    newSkill: {},
    newPosition: {}
}

const devsReducer = (state = initialState, action) => {
    const { type, value } = action
    switch (type) {
        case actionsDevs.SET_DEVS:
            return {
                ...state,
                devs: value
            }
        case actionsDevs.SET_SELECTEDUSER:
            return {
                ...state,
                selectedDevs: value
            }
        case actionsDevs.SET_SKILLSDEVS:
            return {
                ...state,
                skillsDevs: value
            }
        case actionsDevs.SET_POSITIONDEVS:
            return {
                ...state,
                positionsDevs: value
            }
        case actionsDevs.CHANGEDEV:
            return {
                ...state,
                changeDev: value
            }
        case actionsDevs.NEW_SKILL:
            return {
                ...state,
                newSkill: value
            }
        case actionsDevs.NEW_POSITION:
            return {
                ...state,
                newPosition: value
            }
        default:
            return state
    }
}

export default devsReducer