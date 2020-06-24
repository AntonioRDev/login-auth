import { toast } from 'react-toastify';

export const toastSuccess = (message) => {
    toast.success(message);
}

export const toastError = (message) => {
    toast.error(message);
}

export const toastWarn = (message) => {
    toast.warn(message);
}

export const toastInfo = (message) => {
    toast.info(message);
}

export const toastDefault = (message) => {
    toast(message);
}