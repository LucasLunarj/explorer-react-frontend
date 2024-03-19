import { ReturnContainer } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function ReturnButton({ ...rest }) {
    return (
        <ReturnContainer {...rest}>

            <FiArrowLeft />
            Voltar

        </ReturnContainer>
    )
}