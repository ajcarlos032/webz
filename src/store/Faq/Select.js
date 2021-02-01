export const faqCategoriesSelector = (state) => state.faq.categories

export const faqSelector = (state) => state.faq
export const faqIdsSelector = (state) => state.faq.faqs.ids
export const faqByIdSelector = (id) => (state) => state.faq.faqs.data[`faq_${id}`]
