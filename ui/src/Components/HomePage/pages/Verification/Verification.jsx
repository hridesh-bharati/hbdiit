import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import UseFullCard from './UseFullCard';
import html2pdf from 'html2pdf.js';
import Marquee from '../../Marquee'
import Typed from "typed.js";
import { verifyCertificate } from '../../../../api/adminApi/api';
import Footer from '../../../Footer/Footer';
const Verification = () => {
   const [regNum, setRegNum] = useState('');
   const [stdData, setStdData] = useState({});
   const [captchaValue, setCaptchaValue] = useState('');
   const [userInput, setUserInput] = useState('');
   const [isCaptchaVerified, setIsCaptchaVerified] = useState(true);

   useEffect(() => {
      generateCaptcha();
   }, []);

   const generateCaptcha = () => {
      const randomText = Math.random().toString(36).substring(7);
      setCaptchaValue(randomText);
      setUserInput("");
      setIsCaptchaVerified(false);
   };

   const verifyCertificateHandler = async () => {
      if (!regNum) {
         alert("Please Enter Registration Number");
         return;
      }
      const rspns = await verifyCertificate(regNum);
      console.log(rspns);
      setStdData(rspns.message);
   };

   const handleInputChange = (event) => {
      setUserInput(event.target.value);
   };
   const handleCaptchaCheck = () => {
      if (userInput.toLowerCase() === captchaValue.toLowerCase()) {
         setIsCaptchaVerified(true);
         toast.success("CAPTCHA Verified!");
         verifyCertificateHandler();
      } else {
         setIsCaptchaVerified(false);
         toast.error("CAPTCHA failed.");
         generateCaptcha();
      }
   };
   var StdCourseHrs;

   // Extracting numeric value from duration string
   const durationNumeric = parseInt(stdData?.details?.duration, 10);
   if (durationNumeric === 15) {
      StdCourseHrs = 900;
   } else if (durationNumeric === 13) {
      StdCourseHrs = 1300;
   } else if (durationNumeric === 12) {
      StdCourseHrs = 1200;
   }
   else if (durationNumeric === 1) {
      StdCourseHrs = 1000;
   } else if (durationNumeric === 9) {
      StdCourseHrs = 900;
   } else {
      StdCourseHrs = 10;
   }

   const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString()
      return `${day}/${month}/${year}`;
   };
   const downloadPDF = async () => {
      const printResult = document.getElementById('printResult');
      if (printResult) {
         try {
            const imageDataUrl = await getImageDataUrl(stdData?.photo);
            const clonedPrintResult = printResult.cloneNode(true);
            const imagesInPrintResult = clonedPrintResult.getElementsByTagName('img');
            for (let i = 0; i < imagesInPrintResult.length; i++) {
               const img = imagesInPrintResult[i];
               if (img.src === stdData?.photo) {
                  img.src = imageDataUrl;
               }
            }
            const options = {
               margin: 0,
               html2canvas: { scale: 3, useCORS: true },
               jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
            };
            html2pdf().from(clonedPrintResult).set(options).save();
         } catch (error) {
            console.error('Error generating PDF:', error);
         }
      } else {
         alert('Element not found.');
      }
   };

   const getImageDataUrl = (imageUrl) => {
      return new Promise((resolve, reject) => {
         const img = new Image();
         img.crossOrigin = 'Anonymous';
         img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/jpeg'));
         };
         img.onerror = (error) => {
            reject(error);
         };
         img.src = imageUrl;
      });
   };
   useEffect(() => {
      const typed = new Typed('#guidline', {
         strings: ['Important Guidelines.', 'Important Guidelines.', 'Important Guidelines.'],
         typeSpeed: 50,
         loop: true,
      });
      return () => typed.destroy();
   }, []);

   const backgroundStyle = {
      backgroundImage: 'url("/images/icon/captcha.png")',
      border: '1px dotted maroon',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '0 5px',
      height: '70%',
      width: 'auto'
   };
   const captchaTextStyle = {
      fontFamily: "Kotta One, serif",
      fontWeight: 'bolder',
      fontStyle: 'italic',
      fontSize: '1.7rem',
      height: '100%',
      letterSpacing: '10px',
      userSelect: 'none',
   };
   //--------------------------Start BgImage----------------------------------//
   const MainBg = {
      backgroundImage: 'url("/images/vender/enquiryBg.png") ',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
      height: '100vh !important',
      padding: '0 !important',
      margin: '0 !important',
   };
   const darkBlueBg = {
      background: '#00062B',
   };
   var a = "केवल पंजीकृत उपयोगकर्ताओं को ही आगे बढ़ने की अनुमति है।";
   var b = "पंजीकरण संख्या छात्र इसे छात्र द्वारा सही ढंग से भरा जाना चाहिए।";
   var c = "किसी भी छात्र/छात्रा का रिकॉर्ड प्राप्त करने के लिए छात्र/छात्रा का पंजीकृत संख्या सही - सही से भरें";
   var d = `रिकॉर्ड फाइल पाने के लिए नियम: सबसे पहले इंस्टीट्यूट कोड डाले फिर अपना सर्टिफिकेट नंबर डाले, जैसे`;
   return (
      <>
         <div className="container-fluid px-0 m-0" style={MainBg}>

            <div id="VerificationBody">
               <div className="row m-0 p-0 justify-content-center my-3" style={{ fontFamily: "'Poppins', sans-serif" }} >
                  <UseFullCard />
                  <div className="col-md-4 col-sm-12 mt-4 mx-0 px-1 ">
                     <div className='rounded-2 cardEffectsBorder cardEffects'>
                        <form className="row gy-2 m-0 myshadow searchCard m-auto text-center">
                           <div className="col-12 m-0 p-0 " style={{ border: '1px solid #012C5', background: 'var(--card-bg)' }}>
                              <div className="container text-center m-0 py-2 h4 fw-bold text-uppercase " style={{ color: 'rgb(255, 255, 255)' }}>
                                 <b style={{ letterSpacing: '1px', color: 'white' }}>
                                    Verify Your <font color="red">Certificate</font>
                                 </b>
                              </div>
                           </div>
                           <div className="col-md-12 position-relative">
                              <p className="text-center text-white py-0 my-0  smallText"> <span className="text-warning">
                                 <i className="bi bi-exclamation-triangle-fill fs-5 py-0 my-0"></i></span> Read the guidline's.</p>
                              <div className="input-group mb-3">
                                 <span className="input-group-text" id="basic-addon1"><i className="bi bi-person-fill"></i></span>
                                 <input type="text" className="form-control" placeholder="Enter Registration No."
                                    onChange={(e) => { setRegNum(e.target.value) }} />
                              </div>
                           </div>
                           <div className="my-1">
                              <div className="row">
                                 <div className="col-12">
                                    <label htmlFor="captcha" style={captchaTextStyle}>
                                       <div className="pb-3 p-1 text-center">
                                          <div style={backgroundStyle} className='pb-3'>
                                             {captchaValue}
                                          </div>
                                       </div>
                                    </label>
                                    <button
                                       type="button"
                                       className="btn btn-warning px-2 border-0"
                                       onClick={generateCaptcha}
                                    >
                                       <img src="/images/icon/refresh.png" alt="Reload Captcha" />
                                    </button>
                                 </div>
                              </div>

                              <div>
                                 <div className="input-group">
                                    <span className="input-group-text my-0 py-0">
                                       <i className="bi bi-check2-square"></i>
                                    </span>
                                    <input
                                       type="text"
                                       id="captcha"
                                       placeholder="Enter Captcha here.."
                                       value={userInput}
                                       className="form-control border-0 bg-white"
                                       onChange={handleInputChange}
                                    />
                                 </div>
                                 <button
                                    type="button"
                                    className="btn btn-warning w-100 my-3"
                                    onClick={handleCaptchaCheck}
                                    disabled={!userInput || isCaptchaVerified}
                                 >
                                    <i className="bi bi-search"></i> Verify
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-12 mt-4 rounded-2 cardEffectsBorder cardEffects" >
                     <div className="row">
                        <div className="col-12 bg-warning fw-bolder py-1 text-dark fs-4 text-uppercase">
                           <b style={{ letterSpacing: '1px' }}>
                              <span id='guidline'></span></b></div>
                     </div>
                     <div className="row"  >
                        <div className="col-12 text-white fw-normal py-0 my-0 small">
                           <Marquee behavior="scroll" scrollamount="1" direction="up" >
                              <p className='HindiFont'>[1]. {a} </p>
                              <hr width="100%" />
                              <p className='HindiFont' >[2]. {b}</p>
                              <hr width="100%" />
                              <p className='HindiFont' >[3]. {c} </p>
                              <hr width="100%" />
                              <p className='HindiFont'>[4]. {d} <span className='text-black bg-warning p-1'>DIIT124/कोर्स का नाम/रजिस्ट्रेशन नंबर</span>`</p>
                           </Marquee>
                        </div>
                     </div>            
                  </div>
               </div>
               <div className='mt-4 fs-5'>
                  {stdData.photo && (
                     <>
                        <div className="certificate-wrapper m-auto">
                           <div id="printResult" className='bg-white p-2' style={{ color: '#00062B', overflowX: 'auto' }}>
                              <div className="m-0 bg-white certificate" id="watermark" style={{ border: "10px solid #00062B" }}>
                                 {/* Header */}
                                 <div className="header row bgwhite pt-2 d-flex align-items-center justify-content-between mx-1">
                                    <div className="col-2 HeaderLeft m-0 align-self-start">
                                       <img
                                          src="images/vender/logo.png"
                                          alt="DIIT"
                                          style={{
                                             width: '100px',
                                             height: '100px',
                                             objectFit: 'contain'
                                          }}
                                       />
                                    </div>

                                    <div className="col-7 text-center HeaderCenter m-0 p-0 align-self-start">
                                       <div className="row d-flex justify-content-end p-0 m-0">
                                          <div className="col-8 title p-0 m-0 pt-3">
                                             <h1
                                                className='fw-bolder custom-heading'
                                                style={{ fontFamily: "'Rubik', sans-serif" }}
                                             >
                                                <big>DRISHTEE</big>
                                             </h1>


                                             <p style={{ color: 'maroon', fontFamily: 'Poppins, sans-serif', letterSpacing: '3px' }} className='headTitle p-1'>
                                                An ISO 9001-2008 Certified Institute
                                             </p>
                                          </div>
                                          <div className="col-4 studentpic m-0">
                                             <img src={stdData.photo} alt="DIIT_Student" className='bg-white p-0 m-0' />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-3 p-0 m-0 pt-1 HeaderRight text-end fw-medium small align-self-start">
                                       <p className='p-0 m-0 small'>Reg Under Society act 21, 1860 govt, of india</p>
                                       <p className='p-0 m-0 small'>Reg NO : 72/2013-14</p>
                                    </div>
                                 </div>

                                 {/* Title */}
                                 <div className="caption text-center" style={{ background: '#00062B', color: 'white' }}>
                                    <h1
                                       className='py-1 fw-bolder Completiontext custom-heading'
                                       style={{ fontFamily: 'Cinzel, serif', letterSpacing: '1px' }}
                                    >
                                       Certificate of Course Completion
                                    </h1>
                                 </div>

                                 {/* Certificate Body */}
                                 <div className="row p-1 px-3 fs-5 text-center customdata">
                                    <div className="col">
                                       {/* Awarded To */}
                                       <h4 className='m-0 py-1 d-inline scrtspace edu-qld-beginner-uniquex'>
                                          This Certificate is awarded to Mr/Miss
                                       </h4>
                                       <h3
                                          className='ps-1 d-inline customdata fw-bolder'
                                          style={{
                                             color: "red",
                                             textDecoration: 'underline',
                                             textUnderlineOffset: '6px',
                                             letterSpacing: '3px',
                                             fontFamily: 'Merriweather, serif'
                                          }}
                                       >
                                          {stdData.name} S/O {stdData.fatherName}
                                       </h3>

                                       {/* Course Details */}
                                       <p className='mt-2'>
                                          on the successful Completion of a <b>{stdData.duration}</b> and
                                          <b> ({StdCourseHrs} Hrs.)</b> course, titled
                                       </p>

                                       {/* Course Title */}
                                       <h4
                                          className='fw-bolder p-0 m-0'
                                          style={{
                                             color: "red",
                                             letterSpacing: '3px',
                                             textDecoration: 'underline',
                                             textUnderlineOffset: '6px',
                                             fontFamily: 'Poppins, sans-serif'
                                          }}
                                       >
                                          {stdData.description}
                                       </h4>

                                       {/* Grade & Location */}
                                       <p className='scrtspace m-0 p-2'>
                                          with grade & percentage <span style={{ color: 'red', fontSize: '1.5rem' }}>
                                             Excellent & {stdData.percentage}%
                                          </span>
                                          <br />
                                          Examination conducted on an all-India basis at <span style={{ color: 'red' }}>Maharajganj / U.P.</span>
                                       </p>
                                       {/* Modules */}
                                       <div className="AllCoursseContent m-0 pt-3">
                                          <div className="row">
                                             <div className="col-3">
                                                <p className='m-0 p-0 ps-lg-5 small customdata d-flex justify-content-end'>
                                                   <b style={{ color: "black" }}>Modules Covered:</b>
                                                </p>
                                             </div>
                                             <div className="col-9 d-flex">
                                                <ul className='px-lg-3 list-group-numbered d-flex flex-wrap fw-medium'>
                                                   {stdData.subjects?.flat().map((subject) => (
                                                      <li key={subject._id} className='mx-1 px-1 list-group-item DarkBlueText'>{subject.name}</li>
                                                   ))}
                                                </ul>
                                             </div>
                                          </div>

                                          {/* Signature and Date */}
                                          <table className='w-100 table-responsive m-0 p-0 mt-2 small'>
                                             <tbody>
                                                <tr>
                                                   <td className='text-start'>
                                                      <img src="images/vender/signature.png" alt="Sign" className='signature' />
                                                      <p className='m-0'>Chief Exam Controller</p>
                                                   </td>
                                                   <td colSpan={3}>
                                                      Date of issue: <span className='fw-medium'>{formatDate(stdData.completationDate)}</span>
                                                   </td>
                                                </tr>
                                                <tr className='text-center small' style={{ fontWeight: '600', borderTop: '1px solid blue', borderBottom: '1px solid blue' }}>
                                                   <td colSpan={2}>
                                                      Student Reg No.: <span className='text-danger text-uppercase'>{stdData.regNum}</span>
                                                   </td>
                                                   <td colSpan={2}>
                                                      Center Code: DIIT0124
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>

                                       {/* Grade Scale */}
                                       <div className="col text-center mt-2 m-0 p-0">
                                          <p className='border border-1 small border-warning-subtle Gradetext bg-warning-subtle d-inline-block'>
                                             Grade Mark: Excellent (81% - 100%), Very Good (71% - 80), Good (61% - 70%), Satisfactory (50% - 60%)
                                          </p>
                                       </div>

                                       {/* Footer */}
                                       <div className="col fw-normal text-center crsfooter customdata">
                                          <h5 style={{ color: 'maroon', fontWeight: 'bold' }}>
                                             DRISHTEE INSTITUTE OF INFORMATION TECHNOLOGY
                                          </h5>
                                          <p><small>(A UNIT OF DRISHTEE EDUCATIONAL & WELFARE SOCIETY)</small></p>
                                          <p className='small'>
                                             Corporate Office: Harredeeh, ward No. 5, Nichlaul, District: Maharajganj (273304)
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Download Button */}
                        <div className="row">
                           <div className="col-12 text-end px-4">
                              <button className="btn btn-sm hover-btn p-0 m-0" onClick={downloadPDF}>
                                 <img src="/images/icon/download.png" className='img-fluid p-0 m-0 resultimg' alt="Download" />
                              </button>
                              <h6 className='text-white lh-lg'>Download your E-Certificate</h6>
                           </div>
                        </div>
                     </>
                  )}
               </div>


            </div>
            <Footer />
         </div >
      </>
   )
};
export default Verification;
