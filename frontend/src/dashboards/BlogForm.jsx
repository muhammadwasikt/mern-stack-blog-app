import { useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { postReq } from "../api/axios";
import { useSelector } from "react-redux";


const BlogForm = () => {

  const [image, setImages] = useState();
  const [loader, setLoader] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const users = useSelector(state => state.user.userId)

  const onSubmit = async (data) => {
    setLoader(true)
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", users.name);

    const response = await postReq("/blog/add", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    if (response) {
      setLoader(false)
      setImages('')
      reset()
    } else {
      setLoader(false)
    }
    console.log(response)

  };

  const handleEditorChange = (content) => {
    setValue("description", content, { shouldValidate: true });
  };

  const handleFileChange = async (e) => {
    const files = e.target.files[0];
    setImages(files);
  };

  return (
    <div className="max-w-5xl mx-auto px-8 pb-4 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter your blog title"
            className={`input input-bordered w-full ${errors.title ? "border-red-500" : "border-gray-300"}`}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
            Blog Content
          </label>
          <div className="h-[350px] border rounded-xl">
            {!Editor ? (
              <p>Loading...</p>
            ) : (
              <Editor
                apiKey={import.meta.env.VITE_EDITOR_API}
                id="description"
                init={{
                  height: 350,
                }}
                onEditorChange={handleEditorChange}
                value={getValues("description") || ""}
              />
            )}
            <input
              type="hidden"
              {...register("description", { required: "Description is required" })}
            />
          </div>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        {/* Image Upload Field */}
        <div>
          <label htmlFor="image" className="block text-lg font-medium text-gray-700 mb-2">
            Upload Images
          </label>
          <div className="flex gap-2 p-2 w-full border rounded-md justify-between">
            <div>
              <input
                id="image"
                type="file"
                accept="image/*"
                multiple
                className="file-input"
                {...register("file", { required: "Image is required" })}
                onChange={handleFileChange}
              />
              {errors.file && <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>}
            </div>
            <div className="h-[50px]">
              {image && <img src={URL.createObjectURL(image)} className="h-[50px] object-contain" />}
            </div>
          </div>
        </div>

        {/* Category Field */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-700 mb-2">
            Select Category
          </label>
          <input id="category" type="text" className="input w-full input-bordered" placeholder="Category" {...register("category", { required: "Category is required" })} />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn bg-primary text-secandory w-full py-3 text-lg font-semibold"
          >
            {loader ? "Loading...." : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
