import { createSlice } from "@reduxjs/toolkit";

export const mailSilce = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false
    },
    reducers: {
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false
        },
    },

}) ;
export const { openSendMessage, closeSendMessage } = mailSilce.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSilce.reducer;

