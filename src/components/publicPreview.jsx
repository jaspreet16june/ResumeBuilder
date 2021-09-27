import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/preview.css";

let PublicPreview = () => {
  let { rid } = useParams();

  let [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        setPreviewData(data);
      });
  }, []);

  return (
    <>
      {previewData && previewData.details.isPublic ? (
        <>
          <p className={`template-${previewData.code}`}>
            {previewData.details.fname}
            {previewData.details.lname}
            {previewData.details.phoneNo}
            {previewData.details.State}
            {previewData.details.city}
            {previewData.details.email}
            {previewData.details.cgpa}
            {previewData.details.Degree}
            {previewData.details.Institute}
            {previewData.details.Year}
          </p>
        </>
      ) : (
        "Not available or not public"
      )}
    </>
  );
};

export default PublicPreview;