import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input className="input-text" id="title" type="text" />
        <p className="input-error">{formErrors.title}</p>
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
        ></textarea>
        <p className="input-error">{formErrors.description}</p>
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input type="checkbox" checked={formData.people.includes(p)} />
              {p}
            </label>
          ))}
        </div>
        <p className="input-error">{formErrors.people}</p>
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={buttonDisabled}
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}
