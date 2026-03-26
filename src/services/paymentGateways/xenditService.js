// Placeholder for Xendit API service
export const XenditService = {
  createInvoice: (data) => {
    console.log("Xendit createInvoice called", data);
    return Promise.resolve({ id: "dummy-xendit-id" });
  },
};