import { r as redirect } from "../../../../chunks/index.js";
import "../../../../chunks/Store.js";
const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
};
const actions = {
  create: async ({ request, locals }) => {
    const formData = await request.formData();
    const thumbnail = formData.get("thumbnail");
    if (thumbnail.size === 0) {
      formData.delete("thumbnail");
    }
    try {
      await locals.pb.collection("club").create(formData);
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};
