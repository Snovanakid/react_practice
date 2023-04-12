import {Paragraph} from "./User.styled"
export const User = ({ user: { name, email } }) => {

    const endsBiz = email.endsWith("biz");
    console.log(endsBiz);

    return (
        <>
            <Paragraph>Name: <span isRed={endsBiz}>{name}</span></Paragraph>
            <Paragraph>E-mail: <span>{email}</span></Paragraph>
        </>
    )
}