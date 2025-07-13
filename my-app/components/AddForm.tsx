"use client";
import { addAction } from "@/utils/addAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddForm = () => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState("");
  async function clientAddAction(formData: FormData) {
    const { error, success } = await addAction(formData);

    if (error) {
      // toast notification
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      router.push("/");
      setImageURL("");
    }
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;

      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("image grate than 1mb is not allowed.");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };
  return (
    <div>
      <form action={clientAddAction}>
        <div className="bg-white text-black p-8 flex gap-4 flex-col">
          {imageURL && (
            <Image src={imageURL} width={200} height={200} alt="img" />
          )}
          <div>
            <label htmlFor="">
              Product Image
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={handleImageChange}
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
