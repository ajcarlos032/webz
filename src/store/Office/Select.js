export const officeSelector = (state) => state.office

export const roomsSelector = (state) => state.office.data.rooms
export const roomByIdSelector = (id) => (state) => state.office.data.rooms[`room_${id}`]

export const paginatorSelector = (state) => state.office.data.paginatorInfo

export const attributesSelector = (state) => state.office.attributes

export const facilitiesSelector = (state) => state.office.facilities

export const typesSelector = (state) => state.office.types

export const searchesSelector = (state) => state.searches
