import { useEffect, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getSkills } from '../form-dev/services/getSkills'
import { getPositions } from '../form-dev/services/getPositions'
import { handleSetPositionsDevs, handleSetSkillsDevs } from '../../../redux/actions/devs'
import PositionsTab from './Components/PositionsTab'
import SkillTab from './Components/SkillTab'

function PillsSkillPosition({ activeTab, toggle }) {

    const dispatch = useDispatch()
    const skills = useSelector(state => state.devs.skillsDevs)
    const positions = useSelector(state => state.devs.positionsDevs)

    useEffect(() => {
        (async () => {
            if (skills.length === 0) {
                const { result } = await getSkills()
                dispatch(handleSetSkillsDevs(result))
            }
            if (positions.length === 0) {
                const { result } = await getPositions()
                dispatch(handleSetPositionsDevs(result))
            }
        })()
    }, [])

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1') }}
                    >
                        Posiciones
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2') }}
                    >
                        Lenguajes
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1" >
                    <PositionsTab />
                </TabPane>
                <TabPane tabId="2" >
                    <SkillTab />
                </TabPane>
            </TabContent>
        </>
    )
}

export default PillsSkillPosition