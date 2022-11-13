import reducer, { IAddressesState, setCurrentAddressId, setEditing, setModalOpen } from "../../store/addresses/addressesSlice"

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
        {
            addresses: [],
            currentAddressId: undefined,
            editing: false,
            modalOpen: false
        }
    )
})

test('should handle setCurrentAddressId action', () => {
    const previousState: IAddressesState = {
        addresses: [],
        currentAddressId: undefined,
        editing: false,
        modalOpen: false
    }

    expect(reducer(previousState, setCurrentAddressId(10))).toEqual(
        {
            addresses: [],
            currentAddressId: 10,
            editing: false,
            modalOpen: false
        }
    )
})

test('should handle setEditing action', () => {
    const previousState: IAddressesState = {
        addresses: [],
        currentAddressId: undefined,
        editing: false,
        modalOpen: false
    }

    expect(reducer(previousState, setEditing(true))).toEqual(
        {
            addresses: [],
            currentAddressId: undefined,
            editing: true,
            modalOpen: false
        }
    )
})

test('should handle setModalOpen action', () => {
    const previousState: IAddressesState = {
        addresses: [],
        currentAddressId: undefined,
        editing: false,
        modalOpen: false
    }

    expect(reducer(previousState, setModalOpen(true))).toEqual(
        {
            addresses: [],
            currentAddressId: undefined,
            editing: false,
            modalOpen: true
        }
    )
})
