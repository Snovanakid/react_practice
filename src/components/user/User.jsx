import {Paragraph} from "./User.styled"
export const User = ({ user: { name, email, id }, deleteUser}) => {
    const endsBiz = email.endsWith("biz");
    return (
        <>
            <Paragraph>Name: <span isRed={endsBiz}>{name}</span></Paragraph>
            <Paragraph>E-mail: <span>{email}</span></Paragraph>
            <button type="button" onClick={()=>{deleteUser(id)}}>Delete</button>
        </>
    )
}