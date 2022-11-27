import React from "react";
import { NextPage } from "next";
// import ClassicEditor from "ckeditor5";
const Record: NextPage = ({ data }: any) => {
  console.log(2, data);

  return <div>Record</div>;
};

export default Record;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://httpbin.org/get`);
  const data = await res.json();
  // Pass data to the page via props
  console.log(1, data);
  console.log("hi");

  return { props: { data } };
}
