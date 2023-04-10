import React from 'react'
import PropTypes from 'prop-types';
// Array and numbers should used in {}

const Props3 = (props) => {
    return (
        <div>
            <h3>Class 3 : Props Concept</h3>
            <h4>Props Normal</h4>
            <h4>Employee Details</h4>
            <ul>
                <li>Employee ID: {props.id}</li>
                <li>Employee Name: {props.name}</li>
                <li>Employee Email: {props.email}</li>
                <li>Employee Skills</li>
                <ul>
                    {props.skills.map((skill, index) => {
                        return <li key={index}>
                            {index + 1}. {skill}
                        </li>
                    }

                    )}
                </ul>
            </ul>
            <hr />
            <PropsAnotherWay name1="Aji" id1={33} email1="aji@gmail.com" skills1={['HTML', 'css', 'React', 'Nextjs']} />
            <hr />
            <PropsForManyEmployee />
            <hr />
            <PropsTypeEmployee name3="Aji" id3={33} email3="aji@gmail.com" skills3={['HTML', 'css', 'React', 'Nextjs']} />
        </div>
    )
}

export function PropsAnotherWay({ id1, name1, email1, skills1 }) {
    return (
        <div>
            <h4>PropsAnotherWay</h4>
            <ul>
                <li>Employee ID: {id1}</li>
                <li>Employee Name: {name1}</li>
                <li>Employee Email: {email1}</li>
                <li>Employee Skills</li>
                {skills1.map((skill) => {
                    return <>
                        <ul>
                            <li>{skill}</li>
                        </ul>
                    </>
                })}

            </ul>

        </div>
    )
}
const employeeInfo = [{ name2: "Aji", id2: 3, email2: "aji@gmail:com", skills2: ['HTML', 'css', 'React', 'Nextjs'] },
{ name2: "Aji", id2: 33, email2: "aji@gmail:com", skills2: ['HTML', 'css', 'React', 'Nextjs'] }, { name2: "Vji", id2: 333, email2: "aji@gmail:com", skills2: ['HTML', 'css', 'React', 'Nextjs'] }]
function PropsForManyEmployee() {
    return (
        <div>
            <h4>PropsForManyEmployee</h4>
            {employeeInfo.map((info, index) => {
                const { id2, name2, email2, skills2 } = info;
                console.log(info);
                return (
                    <>
                        <h5>PropsForManyEmployee {index + 1}:-</h5>
                        <ul key={index}>
                            <li>Employee ID: {id2}</li>
                            <li>Employee Name: {name2}</li>
                            <li>Employee Email: {email2}</li>
                            <li>Employee Skills</li>
                            {skills2.map((skill) => {
                                return <>
                                    <ul>
                                        <li>{skill}</li>
                                    </ul>
                                </>
                            })}

                        </ul>
                    </>

                )

            })}


        </div>
    )
}


// PropsType
// install PropsType
// npm install --save prop-types
//Warning: Failed prop type: Invalid prop `name3` of type `number` supplie {name3={3}}

function PropsTypeEmployee({ id3, name3, email3, skills3 }) {
    return (
        <div>
            <h4>Props Type for EmployeeInfo</h4>
            <ul key={id3}>
                <li>Employee ID: {id3}</li>
                <li>Employee Name: {name3}</li>
                <li>Employee Email: {email3}</li>
                <li>Employee Skills</li>
                {skills3.map((skill) => {
                    return <>
                        <ul>
                            <li>{skill}</li>
                        </ul>
                    </>
                })}

            </ul>

        </div>
    )
}
PropsTypeEmployee.propTypes = {
    id3: PropTypes.number,
    name3: PropTypes.string,
    email3: PropTypes.string,
    skils3: PropTypes.array
}

export default Props3