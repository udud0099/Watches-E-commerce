import { addAction } from "@/utils/addAction";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddForm = () => {
  const router = useRouter();
  async function clientAddAction(formData: FormData) {
    const { error, success } = await addAction(formData);

    if (error) {
      // toast notification
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      router.push("/");
    }
  }
  return (
    <div>
      <form action={clientAddAction}>
        <div className="bg-white text-black p-8 flex gap-4 flex-col">
          <div>
            <label htmlFor="">
              Product Image
              <input
                type="file"
                accept="image/*"
                name="image"
                className="p-4 border "
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              name
              <input type="text" name="name" className="p-4 border " />
            </label>
          </div>

          <div>
            <label htmlFor="">
              price
              <input type="number" name="price" className="p-4 border " />
            </label>
          </div>

          <div>
            <label htmlFor="">
              link
              <input type="text" name="link" className="p-4 border " />
            </label>
          </div>

          <div>
            <label htmlFor="">
              des
              <textarea
                name="description"
                className="p-4 border "
                id=""
                rows={4}
              ></textarea>
            </label>
          </div>

          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
