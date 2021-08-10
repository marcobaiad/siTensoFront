import { actionsDevs } from '../actionsTypes'

// ** Handles Devs in table
export const handleSetDevs = value => dispatch => dispatch({ type: actionsDevs.SET_DEVS, value })

// ** Handles Selected Devs
export const handleSetSelectedDev = value => dispatch => dispatch({ type: actionsDevs.SET_SELECTEDUSER, value })

// ** Handles Set Skills Devs
export const handleSetSkillsDevs = value => dispatch => dispatch({ type: actionsDevs.SET_SKILLSDEVS, value })

// ** Handles Set Positions Devs
export const handleSetPositionsDevs = value => dispatch => dispatch({ type: actionsDevs.SET_POSITIONDEVS, value })

// ** Handles Change Current Dev
export const handleChangeDev = value => dispatch => dispatch({ type: actionsDevs.CHANGEDEV, value })

// ** Handles Change New Skill
export const handleChangeNewSkill = value => dispatch => dispatch({ type: actionsDevs.NEW_SKILL, value })

// ** Handles Change New Position
export const handleChangeNewPosition = value => dispatch => dispatch({ type: actionsDevs.NEW_POSITION, value })