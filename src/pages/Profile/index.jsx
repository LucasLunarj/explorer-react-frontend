
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Header, LinkStyle, Content, UserProfile } from "./styles";

import ProfilePicture from '../../assets/avatar.jpg'

export function Profile() {
    return (
        <Container>
            <Header>
                <LinkStyle to='/'>
                    <FiArrowLeft />
                    <p>Voltar</p>
                </LinkStyle>
                <UserProfile>
                    <img src={ProfilePicture} alt="" />
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </UserProfile>
            </Header>
            <Content>

                <div>
                    <Input disabled placeholder='Lucas Luna' icon={FiUser} />
                    <Input disabled placeholder='lucaslunarj@gmail.com' icon={FiMail} />
                    <Input placeholder='Senha atual' icon={FiLock} />
                    <Input placeholder='Nova senha' icon={FiLock} />
                    <Button name='Salvar' />
                </div>
            </Content>
        </Container>
    )
}