import React, { useRef } from "react";
import { globalStyles } from "../styles/styles";
import axios from "axios";

const CreatePostModal = ({ onPostCreated }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      const data = new FormData(formRef.current);
      const post = {
        user_id: 1,
        content: data.get("content") as string,
      };
      axios
        .post("http://localhost:3001/submit-post", post)
        .then((response) => {
          console.log(response);
          // Call the function passed in through props
          onPostCreated();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          <p style={globalStyles.text}>Create Your Post</p>
          <textarea name="content" style={styles.textArea} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export const styles = {
  textArea: {
    width: "100%",
    height: "100px",
    backgroundColor: "#f9f9f9",
    color: "#14171a",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
  },
};

export default CreatePostModal;
