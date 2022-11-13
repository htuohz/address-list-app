import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import addressApi from "../../api/axios"

export interface IAddress {
    id: number;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    city: string;
    postal_code: string;
    country_code: string;
    state_code: string;
    state_name: string;
}

export type IAddressesState = {
    addresses: Array<IAddress>,
    currentAddressId: number | undefined
    editing: boolean
    modalOpen: boolean
}


// Define the initial state using that type
const initialState: IAddressesState = {
    addresses: [],
    currentAddressId: undefined,
    editing: false,
    modalOpen: false
}

export const fetchAddressesByUserId = createAsyncThunk(
    'addresses/fetchByUserId',
    // if you type your function argument here
    async () => {
        const { data } = await addressApi.get('addresses')
        return data
    }
)

export const addressesSlice = createSlice({
    name: 'addresses',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        reset: () => initialState,
        updateAddresses: (state, action) => { state = action.payload },
        setCurrentAddressId: (state, action) => { state.currentAddressId = action.payload },
        setEditing: (state, action) => { state.editing = action.payload },
        setModalOpen: (state, action) => { state.modalOpen = action.payload }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAddressesByUserId.fulfilled, (state, action) => {
            state.addresses = action.payload
        }
        )
    }

})

export const { reset, setCurrentAddressId, setEditing, setModalOpen } = addressesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const listAddresses = (state: RootState) => state.addresses.addresses
export const getCurrentAddressID = (state: RootState) => state.addresses.currentAddressId
export const getEditing = (state: RootState) => state.addresses.editing
export const getModalOpen = (state: RootState) => state.addresses.modalOpen

export default addressesSlice.reducer