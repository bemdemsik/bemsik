import {IAlertState} from "../../types/types";
import {useDispatch} from "react-redux";
import {hideAlert} from "../../redux/Actions";

interface IAlertProps {
    props: IAlertState
}
export const Alert = ({ props }: IAlertProps) => {
    const dispatch = useDispatch()
    const handleAlertClose = () => dispatch(hideAlert())
    return (
        <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
            {props.alertText}
            <button
                onClick={handleAlertClose}
                className='dtn-close alert-btn'/>
        </div>
    )
}