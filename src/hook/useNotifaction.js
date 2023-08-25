import { toast } from "react-toastify"
// to make a notifaction
const notify = (msg, type) => {
    type === 'success' ? toast.success(msg) : type === 'warn' ? toast.warn(msg) : type === 'error' ? toast.error(msg) : toast.error(msg)
}
export default notify