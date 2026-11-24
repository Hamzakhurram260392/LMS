// import Image from "next/image";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { IoArrowBack } from "react-icons/io5";
// import { GiArrowCursor } from "react-icons/gi";
// import { FaPencil } from "react-icons/fa6";
// import { LuEraser } from "react-icons/lu";
// import { HiColorSwatch } from "react-icons/hi";
// import { PiNotebookBold } from "react-icons/pi";
// import { FaEnvelopeOpen } from "react-icons/fa";
// import { CgArrowsExpandUpRight } from "react-icons/cg";
// import { RxText } from "react-icons/rx";
// import { FaRegImage } from "react-icons/fa6";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import { FaPlay } from "react-icons/fa6";
// import { GiSmokeBomb } from "react-icons/gi";
// import { FaUndoAlt } from "react-icons/fa";
// import { WiSmoke } from "react-icons/wi";
// import { IoIosSettings } from "react-icons/io";
// import { PiQuestionMarkBold } from "react-icons/pi";
// import { FaFontAwesomeFlag } from "react-icons/fa";
// import { RiLoopRightFill } from "react-icons/ri";
// import { FaRegCircle } from "react-icons/fa";
// import { FiTriangle } from "react-icons/fi";
// import { FaStickyNote } from "react-icons/fa";
// import { PiNotePencilDuotone } from "react-icons/pi";
// import { IoMdPaper } from "react-icons/io";
// import { IoIosThumbsUp } from "react-icons/io";
// import { FaHandshake } from "react-icons/fa";
// import { HiFire } from "react-icons/hi2";
// import { BsHeartFill } from "react-icons/bs";
// import { BsBricks } from "react-icons/bs";
// import { PiTrayLight } from "react-icons/pi";
// import { IoFileTray } from "react-icons/io5";
// import { FaSquare } from "react-icons/fa";


// export default function Home() {
//   return (
//   <div className="w-full">

//     <div className="flex justify-center w-full">
//      <div className="bg-[#ccdffd] py-2 px-2 w-full h-20 rounded-t-3xl flex justify-between items-center">
     
//      <div className="flex">
//        <img className="h-12 w-12 ml-8" src="/brick.png" alt="" />
//        <div className="flex px-3 items-center gap-2 bg-[#3684fd] rounded-ee-3xl">
//             <img className="w-8 h-8" src="/puzzle.png" alt="" />
//              <h1 className="text-white text-2xl font-bold pr-3">Brain Visual System</h1>
//       </div>
//      </div>

//      {/* nav links */}
//       <div className="flex gap-6 text-black text-lg items-center px-2 py-1 flex-1 justify-center">
//            <a className="px-3 border-gray-400 border-r-1" href="">My Projects</a>
//           <a className="px-3 border-gray-400 border-r-1" href="">New Project</a>
//            <a className="px-3 border-gray-400 border-r-1" href="">Templates</a>
//           <a className="px-3 border-gray-400 border-r-1" href="">Open</a>
//            <a className="px-3 border-gray-400 border-r-1" href="">Save</a>
//            <a className="px-3 border-gray-400 border-r-1" href="">Export</a>
//       </div>

//          {/* button & settings */}
//         <div className="flex gap-4 px-4">
//          <h1 className="flex items-center text-black text-2xl gap-1 px-4 border-r-1"> <span className="text-[#657ebb] text-3xl border-r-1 px-4"><IoArrowBack /></span> <span className="text-orange-400 text-4xl"> <HiOutlineLightBulb /></span> Settings</h1>
//          <a className="bg-[#37983e] px-5 py-2 rounded-lg text-white font-bold text-xl flex items-center gap-2" href=""> <IoShareSocialOutline />Share <span className="flex items-center"><RiArrowDropDownLine /></span></a>
//         </div>
   
//      </div>
//     </div>

// <div className="flex justify-start px-6 mt-2 gap-2 w-full">
//   {/* Left navbar  */}
//    <ul> <div>
//        <div className=" bg-[#d1e0f9] pt-3 w-16 items-center rounded-2xl">
//       <li>  <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href="/"> <span className="flex justify-center pl-4 text-[#163b97]"><GiArrowCursor /></span></a> </li> <br></br> 
//       <li> <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><FaPencil /></span></a> </li>  <br></br>
//       <li>  <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><LuEraser /></span></a> </li>  <br></br>
//       <li>  <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><HiColorSwatch /></span></a> </li>  <br></br>
//       <li>  <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><PiNotebookBold /></span></a> </li>  <br></br>
//       <li>   <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><FaEnvelopeOpen /></span></a> </li>  <br></br>
//       <li>    <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><CgArrowsExpandUpRight /></span></a> </li>  <br></br>
//       <li>     <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><RxText /></span></a> </li>  <br></br>
//       <li>     <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><FaRegImage /></span></a> </li>  <br></br>
//       <li>  <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3" href=""><span className="flex justify-center pl-4 text-[#163b97]"><RiDeleteBin6Fill /></span></a> </li>  <br></br>
//      <li>  <a className="text-black text-xl flex items-center justify-center" href="">100%</a> </li>  <br></br>
//        </div>
//        <div className="mt-5 bg-[#d1e0f9] rounded-2xl">
//           <a className="text-[#a5bde6] text-3xl flex items-center border-b-2 pb-3 pt-2" href=""><span className="flex justify-center pl-4 text-[#163b97]"><RiDeleteBin6Fill /></span></a> <br></br>
//           <a className="text-black text-xl flex items-center justify-center -mt-5 -mb-2" href="">100%</a> <br></br>
//        </div>
//     </div>
//     </ul>

//     {/* Right Content */}
// <div className="bg-[#d1e0f9] flex justify-between px-2 gap-2 flex-1 h-16 py-3 rounded-t-2xl ">
//   <div className="flex justify-center">
//         <div className="text-3xl bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl items-center flex py-1 px-2">
//            <a className="text-[#2a70e9]" href=""><GiSmokeBomb /></a>
//         </div>
//         <div className="text-3xl bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl border-l-3 items-center flex py-1 px-2">
//            <a className="text-[#2a70e9]" href="/admin"><FaUndoAlt /></a> 
//         </div>
//   </div>
//   <div className="flex justify-around gap-5 ">
//            <a className="bg-[#3da036] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl text-[#fecb35]"><FaPlay /></span> Start</a>
//            <a className="bg-[#f13c4e] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-4xl"><IoIosSettings /></span> Action</a>
//           <a className="bg-[#fe8d10] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-4xl"><PiQuestionMarkBold /></span> Decision</a>
//           <a className="bg-[#543bd2] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl"><FaFontAwesomeFlag /></span> Output</a>
//           <a className="bg-[#f8548d] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl"><RiLoopRightFill /></span> Loop</a>
//          <a className="bg-[#359236] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl"><FaPlay /></span> Run</a>
//   </div>
//   <div className="flex justify-center items-center">
//         <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//           <span className="text-5xl text-[#4786f3]  "> <WiSmoke /></span>
//         </div>
//         <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//           <img className="w-10 h-10" src="/boy.png" alt="" />
//         </div>
//         <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//           <img className="w-10 h-10" src="/child.png" alt="" />
//         </div>
//         <div className="bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//           <img className="w-10 h-10" src="/boy.png" alt="" />
//         </div>
//   </div>
// </div>



// </div>

// <div className="flex justify-center w-[1680px] -mt-18 ml-24">
  
// <div className="bg-[#d1e0f9] flex justify-between px-2 flex-1 h-16 py-3 rounded-b-2xl">
//   <div className="flex justify-center bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//         <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><FaRegCircle /></span>
//         </div>
//         <div className="text-3xl items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><FiTriangle /></span>
//         </div>
//         <div className="text-3xl items-center flex py-1 px-2">
//            <span className="text-[#fed154]"><FaSquare /></span>
//         </div>
//         <div className="text-3xl items-center flex py-1 px-2">
//            <span className="text-[#fa7ead]"><FaSquare /></span>
//         </div>
//         <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#46cdc8]"><FaStickyNote /></span>
//         </div>
//         <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><PiNotePencilDuotone /></span>
//         </div>
//         <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><IoMdPaper /></span>
//         </div>
//   </div>
//   <div className="flex justify-around gap-2">
//            <a className="bg-[#3da036] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl text-[#fecb35]"><FaPlay /></span> Start</a>
//            <a className="bg-[#f13c4e] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-4xl"><IoIosSettings /></span> Action</a>
//           <a className="bg-[#fe8d10] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-4xl"><PiQuestionMarkBold /></span> Decision</a>
//           <a className="bg-[#543bd2] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl"><FaFontAwesomeFlag /></span> Output</a>
//           <a className="bg-[#f8548d] items-center flex py-6 -mt-1 px-5 rounded-xl text-xl text-white font-bold gap-2" href="/">
//             <span className="text-3xl"><RiLoopRightFill /></span> Loop</a>
//   </div>
//   <div className="flex justify-center items-center bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//         <div className="">
//           <span className="text-4xl text-[#e7bb35]  "><IoIosThumbsUp /></span>
//         </div>
//          <div className="text-3xl items-center flex py-1 px-2">
//            <span className="text-[#f0a91b]"><FaHandshake /></span>
//         </div>
//         <div className="text-3xl items-center flex py-1 px-2">
//            <span className="text-[#4faaf5]"><HiFire /></span>
//         </div>
//         <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#fd4e50]"><BsHeartFill /> </span>
//         </div>

//   </div>
//   <div className="flex justify-center items-center bg-[#d1e0f9] border-1 border-[#90b2ec] rounded-xl">
//      <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><PiTrayLight /> </span>
//         </div>
//         <div className="text-2xl  items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><BsBricks /></span>
//         </div>
//         <div className="text-3xl  items-center flex py-1 px-2">
//            <span className="text-[#2a70e9]"><IoFileTray /></span>
//         </div>
//   </div>
// </div>

// </div>

//   </div>
//   );
// }






















// import React from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { IoArrowBack } from "react-icons/io5";
// import { GiArrowCursor } from "react-icons/gi";
// import { FaPencil } from "react-icons/fa6";
// import { LuEraser } from "react-icons/lu";
// import { HiColorSwatch } from "react-icons/hi";
// import { PiNotebookBold } from "react-icons/pi";
// import { FaEnvelopeOpen } from "react-icons/fa";
// import { CgArrowsExpandUpRight } from "react-icons/cg";
// import { RxText } from "react-icons/rx";
// import { FaRegImage } from "react-icons/fa6";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import { FaPlay } from "react-icons/fa6";
// import { GiSmokeBomb } from "react-icons/gi";
// import { FaUndoAlt } from "react-icons/fa";
// import { WiSmoke } from "react-icons/wi";
// import { IoIosSettings } from "react-icons/io";
// import { PiQuestionMarkBold } from "react-icons/pi";
// import { FaFontAwesomeFlag } from "react-icons/fa";
// import { RiLoopRightFill } from "react-icons/ri";
// import { FaRegCircle } from "react-icons/fa";
// import { FiTriangle } from "react-icons/fi";
// import { FaStickyNote } from "react-icons/fa";
// import { PiNotePencilDuotone } from "react-icons/pi";
// import { IoMdPaper } from "react-icons/io";
// import { IoIosThumbsUp } from "react-icons/io";
// import { FaHandshake } from "react-icons/fa";
// import { HiFire } from "react-icons/hi2";
// import { BsHeartFill } from "react-icons/bs";
// import { BsBricks } from "react-icons/bs";
// import { PiTrayLight } from "react-icons/pi";
// import { IoFileTray } from "react-icons/io5";
// import { FaSquare } from "react-icons/fa";

// /* ============ 3D BLOCK BUTTON (Start / Action / Decision ...) ============ */
// function BlockButton({
//   href = "/",
//   color,
//   icon,
//   label,
//   iconClass = "",
// }: {
//   href?: string;
//   color: string;
//   icon: React.ReactNode;
//   label: string;
//   iconClass?: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-lg whitespace-nowrap border border-white/25 transition-all duration-200 hover:-translate-y-1 hover:scale-105 active:translate-y-0.5"
//       style={{
//         background: `linear-gradient(135deg, ${color}, ${color}cc)`,
//         boxShadow: `0 4px 0 rgba(0,0,0,.45), 0 0 18px ${color}88`,
//       }}
//     >
//       <span className={`text-3xl flex items-center ${iconClass}`}>{icon}</span>
//       {label}
//     </a>
//   );
// }

// /* ============ ICON (toolbar ke chhote icons) ============ */
// function Ico({
//   children,
//   className = "text-cyan-300",
//   size = "text-3xl",
//   href,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   size?: string;
//   href?: string;
// }) {
//   const cls = `flex items-center justify-center p-2 ${size} ${className} cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]`;
//   return href ? (
//     <a href={href} className={cls}>
//       {children}
//     </a>
//   ) : (
//     <span className={cls}>{children}</span>
//   );
// }

// /* ============ GROUP (icons ka dabba) ============ */
// function Group({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex items-center rounded-xl border border-cyan-400/30 bg-white/5 px-1 shadow-[0_0_14px_rgba(34,211,238,0.12)]">
//       {children}
//     </div>
//   );
// }

// const leftTools = [
//   { icon: <GiArrowCursor />, href: "/" },
//   { icon: <FaPencil />, href: "" },
//   { icon: <LuEraser />, href: "" },
//   { icon: <HiColorSwatch />, href: "" },
//   { icon: <PiNotebookBold />, href: "" },
//   { icon: <FaEnvelopeOpen />, href: "" },
//   { icon: <CgArrowsExpandUpRight />, href: "" },
//   { icon: <RxText />, href: "" },
//   { icon: <FaRegImage />, href: "" },
//   { icon: <RiDeleteBin6Fill />, href: "" },
// ];

// const navLinks = ["My Projects", "New Project", "Templates", "Open", "Save", "Export"];

// export default function Home() {
//   return (
//     <div className="relative w-full min-h-[calc(100vh-88px)] bg-[#050b1f] text-slate-100 p-4 overflow-hidden">
//       {/* ===== custom animations ===== */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
//         @keyframes slideIn { from { opacity: 0; transform: translateY(24px) rotateX(-10deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
//         @keyframes dotsMove { from { background-position: 0 0; } to { background-position: 28px 28px; } }
//         .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
//         .slide-in { animation: slideIn .7s ease-out both; }
//         .neon-text { text-shadow: 0 0 12px rgba(34,211,238,.7), 0 0 30px rgba(34,211,238,.35); }
//         .canvas-dots { animation: dotsMove 6s linear infinite; }
//       `,
//         }}
//       />

//       {/* ===== Neon Glow Blobs ===== */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl neon-pulse pointer-events-none" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl neon-pulse pointer-events-none" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl neon-pulse pointer-events-none" />

//       {/* ✦ Stars */}
//       <span className="absolute top-3 left-1/3 text-cyan-300 text-xl animate-pulse neon-text pointer-events-none">✦</span>
//       <span className="absolute bottom-6 right-1/4 text-purple-400 text-lg neon-pulse pointer-events-none">✧</span>

//       <div className="relative z-10 flex flex-col gap-3 min-h-[calc(100vh-88px-2rem)]" style={{ perspective: "1600px" }}>
//         {/* =================== HEADER =================== */}
//         <div className="slide-in rounded-3xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.18)] px-3 py-2 flex flex-wrap items-center justify-between gap-3">
//           {/* Logo + Brand */}
//           <div className="flex items-center">
//             <img className="h-12 w-12 ml-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" src="/brick.png" alt="" />
//             <div className="flex items-center gap-2 px-3 py-1 ml-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl rounded-tl-md shadow-[0_0_20px_rgba(34,211,238,0.5)]">
//               <img className="w-8 h-8" src="/puzzle.png" alt="" />
//               <h1 className="text-white text-2xl font-bold pr-2 whitespace-nowrap">Brain Visual System</h1>
//             </div>
//           </div>

//           {/* nav links */}
//           <div className="flex flex-wrap gap-y-1 text-slate-200 text-lg items-center justify-center flex-1">
//             {navLinks.map((l, i) => (
//               <a
//                 key={i}
//                 href=""
//                 className="px-4 whitespace-nowrap border-r border-cyan-400/30 last:border-0 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] transition"
//               >
//                 {l}
//               </a>
//             ))}
//           </div>

//           {/* button & settings */}
//           <div className="flex items-center gap-4 px-2">
//             <h1 className="flex items-center text-slate-100 text-2xl gap-2">
//               <span className="text-purple-300 text-3xl pr-3 border-r border-cyan-400/30 cursor-pointer hover:text-cyan-300 transition">
//                 <IoArrowBack />
//               </span>
//               <span className="text-orange-400 text-4xl drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
//                 <HiOutlineLightBulb />
//               </span>
//               Settings
//             </h1>
//             <a
//               className="bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 rounded-xl text-white font-bold text-xl flex items-center gap-2 border border-white/25 shadow-[0_4px_0_rgba(0,0,0,.45),0_0_18px_rgba(52,211,153,0.6)] hover:-translate-y-1 hover:scale-105 transition"
//               href=""
//             >
//               <IoShareSocialOutline />
//               Share
//               <span className="flex items-center text-3xl -mr-2">
//                 <RiArrowDropDownLine />
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* =================== BODY =================== */}
//         <div className="flex flex-1 gap-3 slide-in" style={{ animationDelay: "0.15s" }}>
//           {/* ---------- Left toolbar ---------- */}
//           <div className="shrink-0 w-[4.5rem] flex flex-col gap-4">
//             <div className="rounded-2xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.15)] overflow-hidden">
//               {leftTools.map((t, i) => (
//                 <div key={i} className="border-b border-cyan-400/20">
//                   <Ico href={t.href} className="text-cyan-300 py-2.5">
//                     {t.icon}
//                   </Ico>
//                 </div>
//               ))}
//               <a
//                 className="text-slate-200 text-lg flex items-center justify-center py-3 hover:text-cyan-300 transition"
//                 href=""
//               >
//                 100%
//               </a>
//             </div>

//             <div className="rounded-2xl border border-purple-500/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(168,85,247,0.2)] overflow-hidden">
//               <div className="border-b border-purple-400/20">
//                 <Ico href="" className="text-purple-300 py-2.5">
//                   <RiDeleteBin6Fill />
//                 </Ico>
//               </div>
//               <a
//                 className="text-slate-200 text-lg flex items-center justify-center py-3 hover:text-purple-300 transition"
//                 href=""
//               >
//                 100%
//               </a>
//             </div>
//           </div>

//           {/* ---------- Right content (top bar + canvas + bottom bar) ---------- */}
//           <div className="flex-1 min-w-0 flex flex-col rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
//             {/* ===== TOP TOOLBAR ===== */}
//             <div className="bg-[#0a1432]/95 backdrop-blur-xl border-b border-cyan-400/40 px-3 py-2 flex flex-wrap items-center justify-between gap-3">
//               <div className="flex items-center gap-1">
//                 <Group>
//                   <Ico href="">
//                     <GiSmokeBomb />
//                   </Ico>
//                 </Group>
//                 <Group>
//                   <Ico href="/admin">
//                     <FaUndoAlt />
//                   </Ico>
//                 </Group>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4 flex-1">
//                 <BlockButton color="#3da036" label="Start" icon={<FaPlay />} iconClass="text-[#fecb35]" />
//                 <BlockButton color="#f13c4e" label="Action" icon={<IoIosSettings />} iconClass="text-4xl" />
//                 <BlockButton color="#fe8d10" label="Decision" icon={<PiQuestionMarkBold />} iconClass="text-4xl" />
//                 <BlockButton color="#543bd2" label="Output" icon={<FaFontAwesomeFlag />} />
//                 <BlockButton color="#f8548d" label="Loop" icon={<RiLoopRightFill />} />
//                 <BlockButton color="#359236" label="Run" icon={<FaPlay />} />
//               </div>

//               <div className="flex items-center gap-1">
//                 <Group>
//                   <Ico size="text-5xl" className="text-cyan-300 p-0">
//                     <WiSmoke />
//                   </Ico>
//                 </Group>
//                 {["/boy.png", "/child.png", "/boy.png"].map((src, i) => (
//                   <div
//                     key={i}
//                     className="rounded-xl border border-cyan-400/30 bg-white/5 hover:scale-110 hover:shadow-[0_0_14px_rgba(34,211,238,0.6)] transition cursor-pointer"
//                   >
//                     <img className="w-10 h-10" src={src} alt="" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ===== CANVAS ===== */}
//             <div className="relative flex-1 min-h-[420px] bg-[#040818] overflow-hidden">
//               <div
//                 className="canvas-dots absolute inset-0 opacity-40"
//                 style={{
//                   backgroundImage: "radial-gradient(rgba(34,211,238,0.55) 1px, transparent 1px)",
//                   backgroundSize: "28px 28px",
//                 }}
//               />
//               <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(168,85,247,0.18)] pointer-events-none" />
//               <span className="absolute top-3 left-4 text-cyan-300/70 text-lg neon-pulse">✦</span>
//               <span className="absolute bottom-3 right-4 text-purple-400/70 text-lg neon-pulse">✧</span>
//             </div>

//             {/* ===== BOTTOM TOOLBAR ===== */}
//             <div className="bg-[#0a1432]/95 backdrop-blur-xl border-t border-cyan-400/40 px-3 py-2 flex flex-wrap items-center justify-between gap-3">
//               {/* shapes */}
//               <Group>
//                 <Ico className="text-[#4aa3ff]"><FaRegCircle /></Ico>
//                 <Ico className="text-[#4aa3ff]"><FiTriangle /></Ico>
//                 <Ico className="text-[#fed154]"><FaSquare /></Ico>
//                 <Ico className="text-[#fa7ead]"><FaSquare /></Ico>
//                 <Ico className="text-[#46cdc8]"><FaStickyNote /></Ico>
//                 <Ico className="text-[#4aa3ff]"><PiNotePencilDuotone /></Ico>
//                 <Ico className="text-[#4aa3ff]"><IoMdPaper /></Ico>
//               </Group>

//               {/* blocks */}
//               <div className="flex flex-wrap justify-center gap-3 flex-1">
//                 <BlockButton color="#3da036" label="Start" icon={<FaPlay />} iconClass="text-[#fecb35]" />
//                 <BlockButton color="#f13c4e" label="Action" icon={<IoIosSettings />} iconClass="text-4xl" />
//                 <BlockButton color="#fe8d10" label="Decision" icon={<PiQuestionMarkBold />} iconClass="text-4xl" />
//                 <BlockButton color="#543bd2" label="Output" icon={<FaFontAwesomeFlag />} />
//                 <BlockButton color="#f8548d" label="Loop" icon={<RiLoopRightFill />} />
//               </div>

//               {/* reactions */}
//               <Group>
//                 <Ico className="text-[#e7bb35]" size="text-4xl"><IoIosThumbsUp /></Ico>
//                 <Ico className="text-[#f0a91b]"><FaHandshake /></Ico>
//                 <Ico className="text-[#4faaf5]"><HiFire /></Ico>
//                 <Ico className="text-[#fd4e50]"><BsHeartFill /></Ico>
//               </Group>

//               {/* trays */}
//               <Group>
//                 <Ico className="text-cyan-300"><PiTrayLight /></Ico>
//                 <Ico className="text-cyan-300" size="text-2xl"><BsBricks /></Ico>
//                 <Ico className="text-cyan-300"><IoFileTray /></Ico>
//               </Group>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






















// import React from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { IoArrowBack } from "react-icons/io5";
// import { GiArrowCursor } from "react-icons/gi";
// import { FaPencil } from "react-icons/fa6";
// import { LuEraser } from "react-icons/lu";
// import { HiColorSwatch } from "react-icons/hi";
// import { PiNotebookBold } from "react-icons/pi";
// import { FaEnvelopeOpen } from "react-icons/fa";
// import { CgArrowsExpandUpRight } from "react-icons/cg";
// import { RxText } from "react-icons/rx";
// import { FaRegImage } from "react-icons/fa6";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import { FaPlay } from "react-icons/fa6";
// import { GiSmokeBomb } from "react-icons/gi";
// import { FaUndoAlt } from "react-icons/fa";
// import { WiSmoke } from "react-icons/wi";
// import { IoIosSettings } from "react-icons/io";
// import { PiQuestionMarkBold } from "react-icons/pi";
// import { FaFontAwesomeFlag } from "react-icons/fa";
// import { RiLoopRightFill } from "react-icons/ri";
// import { FaRegCircle } from "react-icons/fa";
// import { FiTriangle } from "react-icons/fi";
// import { FaStickyNote } from "react-icons/fa";
// import { PiNotePencilDuotone } from "react-icons/pi";
// import { IoMdPaper } from "react-icons/io";
// import { IoIosThumbsUp } from "react-icons/io";
// import { FaHandshake } from "react-icons/fa";
// import { HiFire } from "react-icons/hi2";
// import { BsHeartFill } from "react-icons/bs";
// import { BsBricks } from "react-icons/bs";
// import { PiTrayLight } from "react-icons/pi";
// import { IoFileTray } from "react-icons/io5";
// import { FaSquare } from "react-icons/fa";

// /* ============ 3D BLOCK BUTTON (Start / Action / Decision ...) ============ */
// function BlockButton({
//   href = "/",
//   color,
//   icon,
//   label,
//   iconClass = "",
// }: {
//   href?: string;
//   color: string;
//   icon: React.ReactNode;
//   label: string;
//   iconClass?: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-lg whitespace-nowrap border border-white/25 transition-all duration-200 hover:-translate-y-1 hover:scale-105 active:translate-y-0.5"
//       style={{
//         background: `linear-gradient(135deg, ${color}, ${color}cc)`,
//         boxShadow: `0 4px 0 rgba(0,0,0,.45), 0 0 18px ${color}88`,
//       }}
//     >
//       <span className={`text-3xl flex items-center ${iconClass}`}>{icon}</span>
//       {label}
//     </a>
//   );
// }

// /* ============ ICON (toolbar ke chhote icons) ============ */
// function Ico({
//   children,
//   className = "text-cyan-300",
//   size = "text-3xl",
//   href,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   size?: string;
//   href?: string;
// }) {
//   const cls = `flex items-center justify-center p-2 ${size} ${className} cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]`;
//   return href ? (
//     <a href={href} className={cls}>
//       {children}
//     </a>
//   ) : (
//     <span className={cls}>{children}</span>
//   );
// }

// /* ============ GROUP (icons ka dabba) ============ */
// function Group({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex items-center rounded-xl border border-cyan-400/30 bg-white/5 px-1 shadow-[0_0_14px_rgba(34,211,238,0.12)]">
//       {children}
//     </div>
//   );
// }

// const leftTools = [
//   { icon: <GiArrowCursor />, href: "/" },
//   { icon: <FaPencil />, href: "" },
//   { icon: <LuEraser />, href: "" },
//   { icon: <HiColorSwatch />, href: "" },
//   { icon: <PiNotebookBold />, href: "" },
//   { icon: <FaEnvelopeOpen />, href: "" },
//   { icon: <CgArrowsExpandUpRight />, href: "" },
//   { icon: <RxText />, href: "" },
//   { icon: <FaRegImage />, href: "" },
//   { icon: <RiDeleteBin6Fill />, href: "" },
// ];

// const navLinks = ["My Projects", "New Project", "Templates", "Open", "Save", "Export"];

// export default function Home() {
//   return (
//     <div className="relative w-full min-h-screen bg-[#050b1f] text-slate-100 p-4 overflow-hidden">
//       {/* ===== custom animations ===== */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
//         @keyframes slideIn { from { opacity: 0; transform: translateY(24px) rotateX(-10deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
//         @keyframes dotsMove { from { background-position: 0 0; } to { background-position: 28px 28px; } }
//         .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
//         .slide-in { animation: slideIn .7s ease-out both; }
//         .neon-text { text-shadow: 0 0 12px rgba(34,211,238,.7), 0 0 30px rgba(34,211,238,.35); }
//         .canvas-dots { animation: dotsMove 6s linear infinite; }
//       `,
//         }}
//       />

//       {/* ===== Neon Glow Blobs ===== */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl neon-pulse pointer-events-none" />
//       <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl neon-pulse pointer-events-none" />
//       <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl neon-pulse pointer-events-none" />

//       {/* ✦ Stars */}
//       <span className="absolute top-3 left-1/3 text-cyan-300 text-xl animate-pulse neon-text pointer-events-none">✦</span>
//       <span className="absolute bottom-6 right-1/4 text-purple-400 text-lg neon-pulse pointer-events-none">✧</span>

//       <div className="relative z-10 flex flex-col gap-3 min-h-[calc(100vh-2rem)]" style={{ perspective: "1600px" }}>
//         {/* =================== HEADER =================== */}
//         <div className="slide-in rounded-3xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.18)] px-3 py-2 flex flex-wrap items-center justify-between gap-3">
//           {/* Logo + Brand */}
//           <div className="flex items-center">
//             <img className="h-12 w-12 ml-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" src="/brick.png" alt="" />
//             <div className="flex items-center gap-2 px-3 py-1 ml-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl rounded-tl-md shadow-[0_0_20px_rgba(34,211,238,0.5)]">
//               <img className="w-8 h-8" src="/puzzle.png" alt="" />
//               <h1 className="text-white text-2xl font-bold pr-2 whitespace-nowrap">Brain Visual System</h1>
//             </div>
//           </div>

//           {/* nav links */}
//           <div className="flex flex-wrap gap-y-1 text-slate-200 text-lg items-center justify-center flex-1">
//             {navLinks.map((l, i) => (
//               <a
//                 key={i}
//                 href=""
//                 className="px-4 whitespace-nowrap border-r border-cyan-400/30 last:border-0 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] transition"
//               >
//                 {l}
//               </a>
//             ))}
//           </div>

//           {/* button & settings */}
//           <div className="flex items-center gap-4 px-2">
//             <h1 className="flex items-center text-slate-100 text-2xl gap-2">
//               <a
//                 href="/admin"
//                 title="Back to Admin"
//                 className="text-purple-300 text-3xl pr-3 border-r border-cyan-400/30 cursor-pointer hover:text-cyan-300 hover:-translate-x-1 transition"
//               >
//                 <IoArrowBack />
//               </a>
//               <span className="text-orange-400 text-4xl drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
//                 <HiOutlineLightBulb />
//               </span>
//               Settings
//             </h1>
//             <a
//               className="bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 rounded-xl text-white font-bold text-xl flex items-center gap-2 border border-white/25 shadow-[0_4px_0_rgba(0,0,0,.45),0_0_18px_rgba(52,211,153,0.6)] hover:-translate-y-1 hover:scale-105 transition"
//               href=""
//             >
//               <IoShareSocialOutline />
//               Share
//               <span className="flex items-center text-3xl -mr-2">
//                 <RiArrowDropDownLine />
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* =================== BODY =================== */}
//         <div className="flex flex-1 gap-3 slide-in" style={{ animationDelay: "0.15s" }}>
//           {/* ---------- Left toolbar ---------- */}
//           <div className="shrink-0 w-[4.5rem] flex flex-col gap-4">
//             <div className="rounded-2xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.15)] overflow-hidden">
//               {leftTools.map((t, i) => (
//                 <div key={i} className="border-b border-cyan-400/20">
//                   <Ico href={t.href} className="text-cyan-300 py-2.5">
//                     {t.icon}
//                   </Ico>
//                 </div>
//               ))}
//               <a
//                 className="text-slate-200 text-lg flex items-center justify-center py-3 hover:text-cyan-300 transition"
//                 href=""
//               >
//                 100%
//               </a>
//             </div>

//             <div className="rounded-2xl border border-purple-500/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(168,85,247,0.2)] overflow-hidden">
//               <div className="border-b border-purple-400/20">
//                 <Ico href="" className="text-purple-300 py-2.5">
//                   <RiDeleteBin6Fill />
//                 </Ico>
//               </div>
//               <a
//                 className="text-slate-200 text-lg flex items-center justify-center py-3 hover:text-purple-300 transition"
//                 href=""
//               >
//                 100%
//               </a>
//             </div>
//           </div>

//           {/* ---------- Right content (top bar + canvas + bottom bar) ---------- */}
//           <div className="flex-1 min-w-0 flex flex-col rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
//             {/* ===== TOP TOOLBAR ===== */}
//             <div className="bg-[#0a1432]/95 backdrop-blur-xl border-b border-cyan-400/40 px-3 py-2 flex flex-wrap items-center justify-between gap-3">
//               <div className="flex items-center gap-1">
//                 <Group>
//                   <Ico href="">
//                     <GiSmokeBomb />
//                   </Ico>
//                 </Group>
//                 <Group>
//                   <Ico href="/admin">
//                     <FaUndoAlt />
//                   </Ico>
//                 </Group>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4 flex-1">
//                 <BlockButton color="#3da036" label="Start" icon={<FaPlay />} iconClass="text-[#fecb35]" />
//                 <BlockButton color="#f13c4e" label="Action" icon={<IoIosSettings />} iconClass="text-4xl" />
//                 <BlockButton color="#fe8d10" label="Decision" icon={<PiQuestionMarkBold />} iconClass="text-4xl" />
//                 <BlockButton color="#543bd2" label="Output" icon={<FaFontAwesomeFlag />} />
//                 <BlockButton color="#f8548d" label="Loop" icon={<RiLoopRightFill />} />
//                 <BlockButton color="#359236" label="Run" icon={<FaPlay />} />
//               </div>

//               <div className="flex items-center gap-1">
//                 <Group>
//                   <Ico size="text-5xl" className="text-cyan-300 p-0">
//                     <WiSmoke />
//                   </Ico>
//                 </Group>
//                 {["/boy.png", "/child.png", "/boy.png"].map((src, i) => (
//                   <div
//                     key={i}
//                     className="rounded-xl border border-cyan-400/30 bg-white/5 hover:scale-110 hover:shadow-[0_0_14px_rgba(34,211,238,0.6)] transition cursor-pointer"
//                   >
//                     <img className="w-10 h-10" src={src} alt="" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ===== CANVAS ===== */}
//             <div className="relative flex-1 min-h-[420px] bg-[#040818] overflow-hidden">
//               <div
//                 className="canvas-dots absolute inset-0 opacity-40"
//                 style={{
//                   backgroundImage: "radial-gradient(rgba(34,211,238,0.55) 1px, transparent 1px)",
//                   backgroundSize: "28px 28px",
//                 }}
//               />
//               <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(168,85,247,0.18)] pointer-events-none" />
//               <span className="absolute top-3 left-4 text-cyan-300/70 text-lg neon-pulse">✦</span>
//               <span className="absolute bottom-3 right-4 text-purple-400/70 text-lg neon-pulse">✧</span>
//             </div>

//             {/* ===== BOTTOM TOOLBAR ===== */}
//             <div className="bg-[#0a1432]/95 backdrop-blur-xl border-t border-cyan-400/40 px-3 py-2 flex flex-wrap items-center justify-between gap-3">
//               {/* shapes */}
//               <Group>
//                 <Ico className="text-[#4aa3ff]"><FaRegCircle /></Ico>
//                 <Ico className="text-[#4aa3ff]"><FiTriangle /></Ico>
//                 <Ico className="text-[#fed154]"><FaSquare /></Ico>
//                 <Ico className="text-[#fa7ead]"><FaSquare /></Ico>
//                 <Ico className="text-[#46cdc8]"><FaStickyNote /></Ico>
//                 <Ico className="text-[#4aa3ff]"><PiNotePencilDuotone /></Ico>
//                 <Ico className="text-[#4aa3ff]"><IoMdPaper /></Ico>
//               </Group>

//               {/* blocks */}
//               <div className="flex flex-wrap justify-center gap-3 flex-1">
//                 <BlockButton color="#3da036" label="Start" icon={<FaPlay />} iconClass="text-[#fecb35]" />
//                 <BlockButton color="#f13c4e" label="Action" icon={<IoIosSettings />} iconClass="text-4xl" />
//                 <BlockButton color="#fe8d10" label="Decision" icon={<PiQuestionMarkBold />} iconClass="text-4xl" />
//                 <BlockButton color="#543bd2" label="Output" icon={<FaFontAwesomeFlag />} />
//                 <BlockButton color="#f8548d" label="Loop" icon={<RiLoopRightFill />} />
//               </div>

//               {/* reactions */}
//               <Group>
//                 <Ico className="text-[#e7bb35]" size="text-4xl"><IoIosThumbsUp /></Ico>
//                 <Ico className="text-[#f0a91b]"><FaHandshake /></Ico>
//                 <Ico className="text-[#4faaf5]"><HiFire /></Ico>
//                 <Ico className="text-[#fd4e50]"><BsHeartFill /></Ico>
//               </Group>

//               {/* trays */}
//               <Group>
//                 <Ico className="text-cyan-300"><PiTrayLight /></Ico>
//                 <Ico className="text-cyan-300" size="text-2xl"><BsBricks /></Ico>
//                 <Ico className="text-cyan-300"><IoFileTray /></Ico>
//               </Group>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { GiArrowCursor } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";
import { LuEraser } from "react-icons/lu";
import { HiColorSwatch } from "react-icons/hi";
import { PiNotebookBold } from "react-icons/pi";
import { FaEnvelopeOpen } from "react-icons/fa";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { RxText } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa6";
import { GiSmokeBomb } from "react-icons/gi";
import { FaUndoAlt, FaRedoAlt } from "react-icons/fa";
import { WiSmoke } from "react-icons/wi";
import { IoIosSettings } from "react-icons/io";
import { PiQuestionMarkBold } from "react-icons/pi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { RiLoopRightFill } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { FaStickyNote } from "react-icons/fa";
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoMdPaper } from "react-icons/io";
import { IoIosThumbsUp } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { HiFire } from "react-icons/hi2";
import { BsHeartFill } from "react-icons/bs";
import { BsBricks, BsDiamond, BsHexagon } from "react-icons/bs";
import { PiTrayLight, PiHandsClappingFill } from "react-icons/pi";
import { IoFileTray } from "react-icons/io5";
import { FaSquare, FaRegSquare, FaRegStar, FaStar, FaSmile, FaTrophy, FaRocket } from "react-icons/fa";

/* =====================================================================
   TYPES
   ===================================================================== */
type Pt = [number, number];

type Tool =
  | "select"
  | "pencil"
  | "eraser"
  | "line"
  | "arrow"
  | "text"
  | "ellipse"
  | "triangle"
  | "rectY"
  | "rectP"
  | "rectG"
  | "rectB"
  | "square"
  | "star"
  | "diamond"
  | "hexagon"
  | "note"
  | "textbox"
  | "paper";

type ObjType =
  | "path"
  | "line"
  | "arrow"
  | "rect"
  | "ellipse"
  | "triangle"
  | "star"
  | "diamond"
  | "hexagon"
  | "note"
  | "paper"
  | "textbox"
  | "text"
  | "block"
  | "image"
  | "sticker"
  | "bubble"
  | "kid";

type BlockKind = "start" | "action" | "decision" | "output" | "loop";

interface Obj {
  id: string;
  type: ObjType;
  x: number;
  y: number;
  w: number;
  h: number;
  x2?: number;
  y2?: number;
  points?: Pt[];
  color: string;
  fill?: string;
  sw: number;
  text?: string;
  fs?: number;
  kind?: BlockKind;
  href?: string;
  gender?: "boy" | "girl"; // only for "kid" (hair color is stored in fill)
}

type Interaction =
  | { mode: "none" }
  | { mode: "pan"; sx: number; sy: number; ox: number; oy: number }
  | { mode: "draw"; id: string }
  | { mode: "erase"; pushed: boolean }
  | { mode: "move"; id: string; lastX: number; lastY: number; moved: boolean }
  | { mode: "resize"; id: string; handle: string }
  | { mode: "create"; id: string; startX: number; startY: number; moved: boolean };

interface SavedProject {
  id: string;
  name: string;
  updated: number;
  objs: Obj[];
}

/* =====================================================================
   CONSTANTS
   ===================================================================== */
const FONT = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

const BLOCK_COLORS: Record<BlockKind, string> = {
  start: "#3da036",
  action: "#f13c4e",
  decision: "#fe8d10",
  output: "#543bd2",
  loop: "#f8548d",
};

const BLOCK_DEF: Record<BlockKind, { w: number; h: number; label: string }> = {
  start: { w: 150, h: 60, label: "Start" },
  action: { w: 150, h: 64, label: "Action" },
  decision: { w: 170, h: 96, label: "Decision" },
  output: { w: 160, h: 64, label: "Output" },
  loop: { w: 150, h: 64, label: "Loop" },
};

const SHAPE_DEFAULT: Record<string, { w: number; h: number }> = {
  ellipse: { w: 140, h: 100 },
  triangle: { w: 130, h: 110 },
  rect: { w: 140, h: 90 },
  note: { w: 160, h: 120 },
  textbox: { w: 180, h: 80 },
  paper: { w: 180, h: 140 },
  star: { w: 120, h: 120 },
  diamond: { w: 110, h: 130 },
  hexagon: { w: 130, h: 115 },
};

const PALETTE = [
  "#22d3ee",
  "#a855f7",
  "#f472b6",
  "#fecb35",
  "#3da036",
  "#f13c4e",
  "#fe8d10",
  "#4aa3ff",
  "#ffffff",
  "#94a3b8",
  "#0a1432",
  "#46cdc8",
];

const TEXT_TYPES: ObjType[] = [
  "rect",
  "ellipse",
  "triangle",
  "star",
  "diamond",
  "hexagon",
  "note",
  "paper",
  "textbox",
  "text",
  "block",
  "sticker",
  "bubble",
];

const TOOL_NAMES: Record<Tool, string> = {
  select: "Select / Move",
  pencil: "Pencil",
  eraser: "Eraser",
  line: "Line",
  arrow: "Arrow",
  text: "Text",
  ellipse: "Circle",
  triangle: "Triangle",
  rectY: "Yellow Box",
  rectP: "Pink Box",
  rectG: "Green Box",
  rectB: "Blue Box",
  square: "Square",
  star: "Star",
  diamond: "Diamond",
  hexagon: "Hexagon",
  note: "Sticky Note",
  textbox: "Text Box",
  paper: "Paper Note",
};

const AUTOSAVE_KEY = "kids-lms-autosave";
const PROJECTS_KEY = "kids-lms-projects";

/* =====================================================================
   HELPERS
   ===================================================================== */
const uid = () => Math.random().toString(36).slice(2, 10);
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function bbox(o: Obj) {
  if (o.type === "path" && o.points && o.points.length) {
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    for (const [px, py] of o.points) {
      if (px < minX) minX = px;
      if (py < minY) minY = py;
      if (px > maxX) maxX = px;
      if (py > maxY) maxY = py;
    }
    return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
  }
  if (o.type === "line" || o.type === "arrow") {
    const x2 = o.x2 ?? o.x;
    const y2 = o.y2 ?? o.y;
    return { x: Math.min(o.x, x2), y: Math.min(o.y, y2), w: Math.abs(x2 - o.x), h: Math.abs(y2 - o.y) };
  }
  return { x: o.x, y: o.y, w: o.w, h: o.h };
}

function moveObj(o: Obj, dx: number, dy: number): Obj {
  if (o.type === "path" && o.points) {
    return { ...o, points: o.points.map(([px, py]) => [px + dx, py + dy] as Pt) };
  }
  if (o.type === "line" || o.type === "arrow") {
    return { ...o, x: o.x + dx, y: o.y + dy, x2: (o.x2 ?? o.x) + dx, y2: (o.y2 ?? o.y) + dy };
  }
  return { ...o, x: o.x + dx, y: o.y + dy };
}

function distToSeg(px: number, py: number, x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy;
  let t = len2 === 0 ? 0 : ((px - x1) * dx + (py - y1) * dy) / len2;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function hitTest(o: Obj, px: number, py: number, tol: number): boolean {
  if (o.type === "path" && o.points) {
    const pts = o.points;
    if (pts.length === 1) return Math.hypot(px - pts[0][0], py - pts[0][1]) <= tol + o.sw / 2;
    for (let i = 0; i < pts.length - 1; i++) {
      if (distToSeg(px, py, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]) <= tol + o.sw / 2) return true;
    }
    return false;
  }
  if (o.type === "line" || o.type === "arrow") {
    return distToSeg(px, py, o.x, o.y, o.x2 ?? o.x, o.y2 ?? o.y) <= tol + o.sw / 2 + 2;
  }
  const b = bbox(o);
  const t = tol * 0.5;
  return px >= b.x - t && px <= b.x + b.w + t && py >= b.y - t && py <= b.y + b.h + t;
}

function handlesOf(o: Obj): { name: string; x: number; y: number }[] {
  if (o.type === "line" || o.type === "arrow") {
    return [
      { name: "p1", x: o.x, y: o.y },
      { name: "p2", x: o.x2 ?? o.x, y: o.y2 ?? o.y },
    ];
  }
  if (o.type === "path" || o.type === "text") return [];
  const { x, y, w, h } = bbox(o);
  return [
    { name: "nw", x, y },
    { name: "ne", x: x + w, y },
    { name: "sw", x, y: y + h },
    { name: "se", x: x + w, y: y + h },
  ];
}

function resizeObj(o: Obj, handle: string, p: { x: number; y: number }): Obj {
  if (o.type === "line" || o.type === "arrow") {
    return handle === "p1" ? { ...o, x: p.x, y: p.y } : { ...o, x2: p.x, y2: p.y };
  }
  const right = o.x + o.w;
  const bottom = o.y + o.h;
  let { x, y, w, h } = o;
  if (handle.includes("w")) {
    x = Math.min(p.x, right - 20);
    w = right - x;
  }
  if (handle.includes("e")) {
    w = Math.max(20, p.x - o.x);
  }
  if (handle.includes("n")) {
    y = Math.min(p.y, bottom - 20);
    h = bottom - y;
  }
  if (handle.includes("s")) {
    h = Math.max(20, p.y - o.y);
  }
  const out: Obj = { ...o, x, y, w, h };
  if (o.type === "sticker") out.fs = h * 0.78;
  return out;
}

function polyPoints(type: ObjType, x: number, y: number, w: number, h: number): string {
  if (type === "diamond") return `${x + w / 2},${y} ${x + w},${y + h / 2} ${x + w / 2},${y + h} ${x},${y + h / 2}`;
  if (type === "hexagon")
    return `${x + w * 0.25},${y} ${x + w * 0.75},${y} ${x + w},${y + h / 2} ${x + w * 0.75},${y + h} ${x + w * 0.25},${y + h} ${x},${y + h / 2}`;
  // star (5 points)
  const cx = x + w / 2;
  const cy = y + h / 2;
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const k = i % 2 === 0 ? 1 : 0.45;
    pts.push(`${cx + Math.cos(a) * (w / 2) * k},${cy + Math.sin(a) * (h / 2) * k}`);
  }
  return pts.join(" ");
}

function pathD(pts: Pt[]) {
  if (pts.length === 0) return "";
  if (pts.length === 1) return `M ${pts[0][0]} ${pts[0][1]} l 0.01 0`;
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2;
    const my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q ${pts[i][0]} ${pts[i][1]} ${mx} ${my}`;
  }
  const last = pts[pts.length - 1];
  d += ` L ${last[0]} ${last[1]}`;
  return d;
}

function arrowHead(x1: number, y1: number, x2: number, y2: number, size: number) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const p1x = x2 - size * Math.cos(a - Math.PI / 7);
  const p1y = y2 - size * Math.sin(a - Math.PI / 7);
  const p2x = x2 - size * Math.cos(a + Math.PI / 7);
  const p2y = y2 - size * Math.sin(a + Math.PI / 7);
  return `${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`;
}

function bubblePath(x: number, y: number, w: number, h: number) {
  const r = Math.min(18, h / 4);
  const bx = x + w * 0.2;
  return `M ${x + r} ${y} H ${x + w - r} Q ${x + w} ${y} ${x + w} ${y + r} V ${y + h - r} Q ${x + w} ${y + h} ${x + w - r} ${y + h} H ${bx + 28} L ${bx - 6} ${y + h + 26} L ${bx + 4} ${y + h} H ${x + r} Q ${x} ${y + h} ${x} ${y + h - r} V ${y + r} Q ${x} ${y} ${x + r} ${y} Z`;
}

function contrast(fill: string) {
  const m = /^#([0-9a-f]{6})$/i.exec(fill);
  if (!m) return "#0a1432";
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? "#0a1432" : "#ffffff";
}

let measureCtx: CanvasRenderingContext2D | null = null;
function measure(text: string, fs: number, bold = false) {
  if (typeof document === "undefined") return text.length * fs * 0.55;
  if (!measureCtx) measureCtx = document.createElement("canvas").getContext("2d");
  if (!measureCtx) return text.length * fs * 0.55;
  measureCtx.font = `${bold ? "700 " : ""}${fs}px ${FONT}`;
  return measureCtx.measureText(text).width;
}

function wrapText(text: string, maxW: number, fs: number, bold = false): string[] {
  const out: string[] = [];
  for (const para of text.split("\n")) {
    if (!para) {
      out.push("");
      continue;
    }
    const words = para.split(" ");
    let line = "";
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (!line || measure(test, fs, bold) <= maxW) line = test;
      else {
        out.push(line);
        line = w;
      }
    }
    out.push(line);
  }
  return out;
}

function newShape(tool: Tool, x: number, y: number, color: string, width: number): Obj {
  const base = { id: uid(), x, y, w: 0, h: 0, color, sw: width };
  switch (tool) {
    case "ellipse":
      return { ...base, type: "ellipse", fill: "none" };
    case "triangle":
      return { ...base, type: "triangle", fill: "none" };
    case "rectY":
      return { ...base, type: "rect", fill: "#fed154", sw: 2 };
    case "star":
      return { ...base, type: "star", fill: "none" };
    case "diamond":
      return { ...base, type: "diamond", fill: "none" };
    case "hexagon":
      return { ...base, type: "hexagon", fill: "none" };
    case "square":
      return { ...base, type: "rect", fill: "none" };
    case "rectG":
      return { ...base, type: "rect", fill: "#5ee08a", sw: 2 };
    case "rectB":
      return { ...base, type: "rect", fill: "#60a5fa", sw: 2 };
    case "rectP":
      return { ...base, type: "rect", fill: "#fa7ead", sw: 2 };
    case "note":
      return { ...base, type: "note", fill: "#46cdc8", sw: 0, text: "" };
    case "textbox":
      return { ...base, type: "textbox", fill: "none", text: "" };
    case "paper":
      return { ...base, type: "paper", fill: "#f8fafc", sw: 1, text: "" };
    case "arrow":
      return { ...base, type: "arrow", x2: x, y2: y };
    default:
      return { ...base, type: "line", x2: x, y2: y };
  }
}

function templateObjs(name: "flow" | "mind"): Obj[] {
  const mk = (o: Partial<Obj> & { type: ObjType }): Obj => ({
    id: uid(),
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    color: "#22d3ee",
    sw: 3,
    ...o,
  });
  if (name === "flow") {
    return [
      mk({ type: "block", kind: "start", x: 200, y: 60, w: 150, h: 60, text: "Start" }),
      mk({ type: "arrow", x: 275, y: 122, x2: 275, y2: 188 }),
      mk({ type: "block", kind: "action", x: 200, y: 190, w: 150, h: 64, text: "Action" }),
      mk({ type: "arrow", x: 275, y: 256, x2: 275, y2: 298 }),
      mk({ type: "block", kind: "decision", x: 190, y: 300, w: 170, h: 96, text: "Decision" }),
      mk({ type: "arrow", x: 275, y: 398, x2: 275, y2: 448 }),
      mk({ type: "block", kind: "output", x: 195, y: 450, w: 160, h: 64, text: "Output" }),
    ];
  }
  const cx = 400;
  const cy = 260;
  const notes = [
    { x: 120, y: 90, fill: "#fed154", text: "Idea 1" },
    { x: 600, y: 90, fill: "#fa7ead", text: "Idea 2" },
    { x: 120, y: 400, fill: "#46cdc8", text: "Idea 3" },
    { x: 600, y: 400, fill: "#a5b4fc", text: "Idea 4" },
  ];
  return [
    ...notes.map((n) =>
      mk({
        type: "line",
        x: cx,
        y: cy,
        x2: n.x + 80,
        y2: n.y + 45,
        color: "#22d3ee",
        sw: 3,
      })
    ),
    mk({ type: "ellipse", x: cx - 90, y: cy - 45, w: 180, h: 90, fill: "#a855f7", text: "Main Idea", sw: 2 }),
    ...notes.map((n) =>
      mk({ type: "note", x: n.x, y: n.y, w: 160, h: 90, fill: n.fill, text: n.text, sw: 0 })
    ),
  ];
}

function download(url: string, name: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* =====================================================================
   QUESTION LAB — counting questions + kid-friendly code
   ===================================================================== */
const HAIR_COLORS = [
  { name: "black", hex: "#1f1f1f" },
  { name: "brown", hex: "#7b4a26" },
  { name: "yellow", hex: "#facc15" },
  { name: "red", hex: "#ef4444" },
  { name: "orange", hex: "#f97316" },
];

// hex -> simple color word a child knows (nearest match)
const NAMED_COLORS: [string, string][] = [
  ["red", "#ef4444"],
  ["orange", "#f97316"],
  ["yellow", "#facc15"],
  ["green", "#22c55e"],
  ["green", "#3da036"],
  ["blue", "#3b82f6"],
  ["blue", "#22d3ee"],
  ["purple", "#a855f7"],
  ["purple", "#a5b4fc"],
  ["pink", "#ec4899"],
  ["brown", "#7b4a26"],
  ["black", "#111111"],
  ["white", "#ffffff"],
  ["gray", "#94a3b8"],
];

function hexToRgb(hex: string): [number, number, number] | null {
  let h = hex.trim().replace("#", "");
  if (/^[0-9a-f]{3}$/i.test(h)) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9a-f]{6}$/i.test(h)) return null;
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function colorName(hex?: string): string {
  const rgb = hex ? hexToRgb(hex) : null;
  if (!rgb) return "gray";
  let best = "gray";
  let bestD = Infinity;
  for (const [name, h] of NAMED_COLORS) {
    const c = hexToRgb(h);
    if (!c) continue;
    const d = (rgb[0] - c[0]) ** 2 + (rgb[1] - c[1]) ** 2 + (rgb[2] - c[2]) ** 2;
    if (d < bestD) {
      bestD = d;
      best = name;
    }
  }
  return best;
}

type ThingGroup = "shape" | "kid";
interface Thing {
  id: string;
  group: ThingGroup;
  kind: string; // circle / triangle / square  OR  boy / girl
  color: string; // shape color OR hair color (as a word)
}

const SHAPE_KIND: Partial<Record<ObjType, string>> = {
  ellipse: "circle",
  triangle: "triangle",
  rect: "square",
  star: "star",
  diamond: "diamond",
  hexagon: "hexagon",
};

function thingsOf(objs: Obj[]): Thing[] {
  const out: Thing[] = [];
  for (const o of objs) {
    if (SHAPE_KIND[o.type]) {
      const kind = SHAPE_KIND[o.type] as string;
      const c = o.fill && o.fill !== "none" ? o.fill : o.color;
      out.push({ id: o.id, group: "shape", kind, color: colorName(c) });
    } else if (o.type === "kid") {
      out.push({ id: o.id, group: "kid", kind: o.gender || "boy", color: colorName(o.fill) });
    }
  }
  return out;
}

interface Filter {
  kind?: string;
  color?: string;
}

type Question =
  | { id: string; type: "count"; group: ThingGroup; filter: Filter; text: string; label: string }
  | { id: string; type: "compare"; group: ThingGroup; a: string; b: string; text: string };

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const pl = (s: string) => s + "s";
const uniq = (arr: string[]) => Array.from(new Set(arr));

function suggestQuestions(things: Thing[]): Question[] {
  const qs: Question[] = [];
  const count = (group: ThingGroup, filter: Filter, text: string, label: string): Question => ({
    id: `c:${group}:${filter.kind ?? "*"}:${filter.color ?? "*"}`,
    type: "count",
    group,
    filter,
    text,
    label,
  });
  const compare = (group: ThingGroup, a: string, b: string, text: string): Question => ({
    id: `v:${group}:${a}:${b}`,
    type: "compare",
    group,
    a,
    b,
    text,
  });

  const shapes = things.filter((t) => t.group === "shape");
  const kids = things.filter((t) => t.group === "kid");

  if (shapes.length) {
    const kinds = uniq(shapes.map((s) => s.kind));
    const colors = uniq(shapes.map((s) => s.color));
    qs.push(count("shape", {}, "How many shapes are there in total?", "Total shapes"));
    kinds.forEach((k) => qs.push(count("shape", { kind: k }, `How many ${pl(k)} are there?`, cap(pl(k)))));
    uniq(shapes.map((s) => `${s.color}|${s.kind}`)).forEach((c) => {
      const [col, k] = c.split("|");
      qs.push(
        count("shape", { kind: k, color: col }, `How many ${col} ${pl(k)} are there?`, `${cap(col)} ${pl(k)}`)
      );
    });
    if (colors.length > 1) {
      colors.forEach((col) =>
        qs.push(count("shape", { color: col }, `How many ${col} shapes are there?`, `${cap(col)} shapes`))
      );
    }
    for (let i = 0; i < kinds.length; i++) {
      for (let j = i + 1; j < kinds.length; j++) {
        const a = kinds[i];
        const b = kinds[j];
        qs.push(compare("shape", a, b, `Are there more ${pl(a)} or ${pl(b)}?`));
      }
    }
  }

  if (kids.length) {
    qs.push(count("kid", {}, "How many kids are there?", "Kids"));
    qs.push(count("kid", { kind: "boy" }, "How many boys are there?", "Boys"));
    qs.push(count("kid", { kind: "girl" }, "How many girls are there?", "Girls"));
    uniq(kids.map((k) => k.color)).forEach((h) =>
      qs.push(count("kid", { color: h }, `How many kids have ${h} hair?`, `Kids with ${h} hair`))
    );
    uniq(kids.map((k) => `${k.kind}|${k.color}`)).forEach((c) => {
      const [g, h] = c.split("|");
      qs.push(
        count(
          "kid",
          { kind: g, color: h },
          `How many ${pl(g)} have ${h} hair?`,
          `${cap(pl(g))} with ${h} hair`
        )
      );
    });
    qs.push(compare("kid", "boy", "girl", "Are there more boys or girls?"));
  }
  return qs;
}

type Lang = "python" | "js";
type Concept = "list" | "var" | "loop" | "if" | "print";
type Tone = "check" | "match" | "skip";
interface Badge {
  n: number;
  tone: "a" | "b";
}
interface CodeLine {
  text: string;
  concept: Concept;
  help: string;
}
interface Step {
  line: number;
  obj?: string;
  tone?: Tone;
  vars: Record<string, number>;
  note: string;
  out?: string;
  badge?: Badge;
}
interface Program {
  lines: CodeLine[];
  steps: Step[];
  answer: string;
  summary: string;
}
interface Trace {
  line: number;
  vars: Record<string, number>;
  note: string;
  out: string[];
  done: boolean;
  answer?: string;
}

const WORDS: Record<ThingGroup, { list: string; item: string; kindAttr: string; colorAttr: string }> = {
  shape: { list: "shapes", item: "shape", kindAttr: "kind", colorAttr: "color" },
  kid: { list: "kids", item: "kid", kindAttr: "gender", colorAttr: "hair" },
};

const matches = (t: Thing, f: Filter) => (!f.kind || t.kind === f.kind) && (!f.color || t.color === f.color);

function filterDesc(group: ThingGroup, f: Filter) {
  if (group === "shape") return [f.color, f.kind ?? "shape"].filter(Boolean).join(" ");
  const who = f.kind ?? "kid";
  return f.color ? `${who} with ${f.color} hair` : who;
}

const thingDesc = (t: Thing) => (t.group === "shape" ? `${t.color} ${t.kind}` : `${t.kind} with ${t.color} hair`);

function buildProgram(q: Question, all: Thing[], lang: Lang): Program {
  const W = WORDS[q.group];
  const items = all.filter((t) => t.group === q.group);
  const n = items.length;
  const py = lang === "python";
  const I = py ? "    " : "  "; // one indent
  const eq = py ? "==" : "===";
  const AND = py ? " and " : " && ";
  const semi = py ? "" : ";";

  const lines: CodeLine[] = [];
  const idx: Record<string, number> = {};
  const add = (text: string, concept: Concept, help: string, role?: string) => {
    if (role) idx[role] = lines.length;
    lines.push({ text, concept, help });
  };
  const steps: Step[] = [];
  const S = (role: string, note: string, vars: Record<string, number>, extra: Partial<Step> = {}) =>
    steps.push({ line: idx[role], note, vars: { ...vars }, ...extra });

  const IF = (c: string) => (py ? `if ${c}:` : `if (${c}) {`);
  const ELIF = (c: string) => (py ? `elif ${c}:` : `} else if (${c}) {`);
  const ELSE = py ? "else:" : "} else {";
  const PRINT = (s: string) => (py ? `print(${s})` : `console.log(${s});`);
  const SKIP = (why: string) => (py ? `pass   # ${why}` : `// ${why}`);

  add(
    py ? `${W.list} = board.${W.list}()   # ${n} ${W.list}` : `let ${W.list} = board.${W.list}();   // ${n} ${W.list}`,
    "list",
    `Put all the ${W.list} on the board (${n}) into one list.`,
    "list"
  );

  /* ---------------- COUNT question ---------------- */
  if (q.type === "count") {
    const f = q.filter;
    const has = !!(f.kind || f.color);
    const desc = filterDesc(q.group, f);
    const parts: string[] = [];
    if (f.kind) parts.push(`${W.item}.${W.kindAttr} ${eq} "${f.kind}"`);
    if (f.color) parts.push(`${W.item}.${W.colorAttr} ${eq} "${f.color}"`);
    const cond = parts.join(AND);

    add(`${py ? "" : "let "}count = 0${semi}`, "var", "The variable `count` is a box that remembers our number. It starts at 0.", "init");
    add(py ? `for ${W.item} in ${W.list}:` : `for (let ${W.item} of ${W.list}) {`, "loop", `Loop 🔁: look at every ${W.item}, one by one — like counting with your finger.`, "loop");
    if (has) {
      add(I + IF(cond), "if", `If 🤔: check — is this a ${desc}? If yes, the next line runs.`, "if");
      add(I + I + `count = count + 1${semi}`, "var", "Yes! So add 1 to the box (count).", "then");
      add(I + ELSE, "if", "Else: if the answer is 'no', this path runs.", "else");
      add(I + I + SKIP("not a match, skip it"), "if", `This is not a ${desc} — do nothing, move on.`, "elseBody");
      if (!py) add(I + "}", "if", "This bracket } closes the if/else.");
    } else {
      add(I + `count = count + 1${semi}`, "var", `For every ${W.item}, add 1 to the box (count).`, "then");
    }
    if (!py) add("}", "loop", "This bracket } closes the loop.");
    add(PRINT(`"${q.label}:", count`), "print", "Print 📢: show the answer on the screen.", "print");

    let count = 0;
    S("list", `Made a list of ${n} ${W.list} from the board.`, {});
    S("init", "Made a box called `count` and put 0 in it.", { count });
    items.forEach((t, i) => {
      S("loop", `Loop round ${i + 1}: this is a ${thingDesc(t)}.`, { count }, { obj: t.id, tone: "check" });
      if (has) {
        const ok = matches(t, f);
        S("if", ok ? `Is this a ${desc}? Yes ✓` : `Is this a ${desc}? No ✗`, { count }, { obj: t.id, tone: ok ? "match" : "skip" });
        if (ok) {
          count++;
          S("then", `count = ${count - 1} + 1 = ${count}`, { count }, { obj: t.id, tone: "match", badge: { n: count, tone: "a" } });
        } else {
          S("else", "The answer was 'no', so we take the else path…", { count }, { obj: t.id, tone: "skip" });
          S("elseBody", "Skip it, go to the next one ➜", { count }, { obj: t.id, tone: "skip" });
        }
      } else {
        count++;
        S("then", `count = ${count - 1} + 1 = ${count}`, { count }, { obj: t.id, tone: "match", badge: { n: count, tone: "a" } });
      }
    });
    S("loop", n ? `Loop finished — we checked all ${n} ${W.list}!` : "The list is empty, so the loop did not run even once.", { count });
    S("print", `Answer printed: ${count}`, { count }, { out: `${q.label}: ${count}` });

    return {
      lines,
      steps,
      answer: `${q.label}: ${count}`,
      summary: has
        ? `The loop looks at every ${W.item} one by one, and if/else checks whether it is a ${desc}. If yes, count + 1.`
        : `The loop counts every ${W.item} one by one and adds 1 to count.`,
    };
  }

  /* ---------------- COMPARE question ---------------- */
  const { a, b } = q;
  const A = pl(a);
  const B = pl(b);
  const twoWay = q.group === "kid"; // a kid is either a boy or a girl → simple if / else

  add(`${py ? "" : "let "}${A} = 0${semi}`, "var", `Box \`${A}\` — to count ${A}. Starts at 0.`, "init");
  add(`${py ? "" : "let "}${B} = 0${semi}`, "var", `Box \`${B}\` — to count ${B}. Starts at 0.`, "init2");
  add(py ? `for ${W.item} in ${W.list}:` : `for (let ${W.item} of ${W.list}) {`, "loop", `Loop 🔁: look at every ${W.item}, one by one.`, "loop");
  add(I + IF(`${W.item}.${W.kindAttr} ${eq} "${a}"`), "if", `If 🤔: is this a ${a}?`, "if");
  add(I + I + `${A} = ${A} + 1${semi}`, "var", `Yes → add 1 to the \`${A}\` box.`, "then");
  if (twoWay) {
    add(I + ELSE, "if", `Else: if it is not a ${a}, it must be a ${b}!`, "else");
    add(I + I + `${B} = ${B} + 1${semi}`, "var", `Add 1 to the \`${B}\` box.`, "then2");
  } else {
    add(I + ELIF(`${W.item}.${W.kindAttr} ${eq} "${b}"`), "if", `Else if: the first answer was 'no' — now check, is this a ${b}?`, "elif");
    add(I + I + `${B} = ${B} + 1${semi}`, "var", `Yes → add 1 to the \`${B}\` box.`, "then2");
    add(I + ELSE, "if", `Else: not a ${a} and not a ${b} — it is some other shape.`, "else");
    add(I + I + SKIP(`some other ${W.item}, skip it`), "if", "Skip it, move on.", "elseBody");
  }
  if (!py) add(I + "}", "if", "This bracket } closes the if/else.");
  if (!py) add("}", "loop", "This bracket } closes the loop.");
  add(IF(`${A} > ${B}`), "if", `Now compare both boxes: are there more ${A}? ( > means "more than" )`, "cmpIf");
  add(I + PRINT(`"More ${A}!"`), "print", `Print 📢: there are more ${A}!`, "cmpThen");
  add(ELIF(`${B} > ${A}`), "if", `Else if: otherwise check — are there more ${B}?`, "cmpElif");
  add(I + PRINT(`"More ${B}!"`), "print", `Print 📢: there are more ${B}!`, "cmpThen2");
  add(ELSE, "if", "Else: both are equal.", "cmpElse");
  add(I + PRINT(`"Same number of ${A} and ${B}!"`), "print", "Print 📢: both are equal!", "cmpElseBody");
  if (!py) add("}", "if", "This bracket } closes the if/else.");

  let na = 0;
  let nb = 0;
  const v = () => ({ [A]: na, [B]: nb });
  S("list", `Made a list of ${n} ${W.list} from the board.`, {});
  S("init", `Made box \`${A}\` — 0.`, { [A]: 0 });
  S("init2", `Made box \`${B}\` — 0.`, v());
  items.forEach((t, i) => {
    S("loop", `Loop round ${i + 1}: this is a ${thingDesc(t)}.`, v(), { obj: t.id, tone: "check" });
    const isA = t.kind === a;
    S("if", isA ? `Is this a ${a}? Yes ✓` : `Is this a ${a}? No ✗`, v(), { obj: t.id, tone: isA ? "match" : "skip" });
    if (isA) {
      na++;
      S("then", `${A} = ${na - 1} + 1 = ${na}`, v(), { obj: t.id, tone: "match", badge: { n: na, tone: "a" } });
      return;
    }
    if (twoWay) {
      S("else", `Not a ${a} — so it is a ${b}!`, v(), { obj: t.id, tone: "match" });
      nb++;
      S("then2", `${B} = ${nb - 1} + 1 = ${nb}`, v(), { obj: t.id, tone: "match", badge: { n: nb, tone: "b" } });
      return;
    }
    const isB = t.kind === b;
    S("elif", isB ? `Is this a ${b}? Yes ✓` : `Is this a ${b}? No ✗`, v(), { obj: t.id, tone: isB ? "match" : "skip" });
    if (isB) {
      nb++;
      S("then2", `${B} = ${nb - 1} + 1 = ${nb}`, v(), { obj: t.id, tone: "match", badge: { n: nb, tone: "b" } });
    } else {
      S("else", `Not a ${a}, not a ${b}…`, v(), { obj: t.id, tone: "skip" });
      S("elseBody", "Skip it, go to the next one ➜", v(), { obj: t.id, tone: "skip" });
    }
  });
  S("loop", n ? `Loop finished — we checked all ${n} ${W.list}!` : "The list is empty, so the loop did not run.", v());
  let answer: string;
  S("cmpIf", `Is ${A} (${na}) > ${B} (${nb})? ${na > nb ? "Yes ✓" : "No ✗"}`, v());
  if (na > nb) {
    answer = `More ${A}! (${na} vs ${nb})`;
    S("cmpThen", "Answer printed!", v(), { out: `More ${A}!` });
  } else {
    S("cmpElif", `Is ${B} (${nb}) > ${A} (${na})? ${nb > na ? "Yes ✓" : "No ✗"}`, v());
    if (nb > na) {
      answer = `More ${B}! (${nb} vs ${na})`;
      S("cmpThen2", "Answer printed!", v(), { out: `More ${B}!` });
    } else {
      answer = `Same number of ${A} and ${B} (${na} each)`;
      S("cmpElse", "Both are equal…", v());
      S("cmpElseBody", "Answer printed!", v(), { out: `Same number of ${A} and ${B}!` });
    }
  }
  return {
    lines,
    steps,
    answer,
    summary: `We make two boxes (${A}, ${B}). The loop looks at every ${W.item} and if/else adds 1 to the right box. At the end, if/else compares them.`,
  };
}

const LEARN: { id: Concept; icon: string; title: string; text: string }[] = [
  { id: "list", icon: "📋", title: "List", text: "Many things in one line — like the class attendance list." },
  { id: "var", icon: "📦", title: "Variable", text: "A box that keeps a number. count = 0 means the box is empty." },
  { id: "loop", icon: "🔁", title: "Loop", text: "Look at each thing one by one — doing the same job again and again." },
  { id: "if", icon: "🤔", title: "If / Else", text: "If something is true, do this; otherwise (else), do that." },
  { id: "print", icon: "📢", title: "Print", text: "Shows the answer on the screen." },
];

const KEYWORDS = new Set(["for", "in", "if", "elif", "else", "pass", "let", "of", "and"]);
function codeTokens(line: string): React.ReactNode[] {
  const re = /(#.*$|\/\/.*$|"[^"]*"|[A-Za-z_]+|\d+)/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m.index > last) out.push(<span key={k++}>{line.slice(last, m.index)}</span>);
    const t = m[0];
    let cls = "";
    if (t.startsWith("#") || t.startsWith("//")) cls = "text-slate-500 italic";
    else if (t.startsWith('"')) cls = "text-amber-300";
    else if (/^\d+$/.test(t)) cls = "text-pink-300";
    else if (KEYWORDS.has(t)) cls = "text-purple-300 font-bold";
    else if (t === "print" || t === "console" || t === "log") cls = "text-emerald-300";
    out.push(
      <span key={k++} className={cls}>
        {t}
      </span>
    );
    last = m.index + t.length;
  }
  if (last < line.length) out.push(<span key={k++}>{line.slice(last)}</span>);
  return out;
}

/* =====================================================================
   SMALL UI PARTS
   ===================================================================== */
function BlockButton({
  color,
  icon,
  label,
  iconClass = "",
  onClick,
}: {
  color: string;
  icon: React.ReactNode;
  label: string;
  iconClass?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-lg whitespace-nowrap border border-white/25 transition-all duration-200 hover:-translate-y-1 hover:scale-105 active:translate-y-0.5"
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        boxShadow: `0 4px 0 rgba(0,0,0,.45), 0 0 18px ${color}88`,
      }}
    >
      <span className={`text-3xl flex items-center ${iconClass}`}>{icon}</span>
      {label}
    </button>
  );
}

function Ico({
  children,
  className = "text-cyan-300",
  size = "text-3xl",
  onClick,
  title,
  active = false,
}: {
  children: React.ReactNode;
  className?: string;
  size?: string;
  onClick?: () => void;
  title?: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`flex items-center justify-center p-2 ${size} ${className} transition-all duration-200 hover:scale-125 hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] ${
        active ? "bg-cyan-400/25 rounded-lg shadow-[0_0_14px_rgba(34,211,238,0.7)] scale-110" : ""
      }`}
    >
      {children}
    </button>
  );
}

function Group({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center rounded-xl border border-cyan-400/30 bg-white/5 px-1 shadow-[0_0_14px_rgba(34,211,238,0.12)]">
      {children}
    </div>
  );
}

function SvgText({
  text,
  x,
  y,
  w,
  h,
  fs,
  color,
  align = "middle",
  vAlign = "middle",
  bold = false,
}: {
  text: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fs: number;
  color: string;
  align?: "middle" | "start";
  vAlign?: "middle" | "top";
  bold?: boolean;
}) {
  const pad = 8;
  const lines = wrapText(text, Math.max(10, w - pad * 2), fs, bold);
  const lh = fs * 1.25;
  const total = lines.length * lh;
  const startY = vAlign === "middle" ? y + h / 2 - total / 2 + lh * 0.8 : y + pad + lh * 0.8;
  const tx = align === "middle" ? x + w / 2 : x + pad + 2;
  return (
    <text
      textAnchor={align}
      fill={color}
      fontSize={fs}
      fontFamily={FONT}
      fontWeight={bold ? 700 : 400}
      style={{ pointerEvents: "none", userSelect: "none" }}
    >
      {lines.map((l, i) => (
        <tspan key={i} x={tx} y={startY + i * lh}>
          {l || " "}
        </tspan>
      ))}
    </text>
  );
}

function ObjView({ o, running, hideText, hl }: { o: Obj; running: boolean; hideText: boolean; hl?: Tone }) {
  const node = <ObjShape o={o} running={running} hideText={hideText} />;
  if (!hl) return node;
  const f = hl === "match" ? "matchGlow" : hl === "skip" ? "skipGlow" : "runGlow";
  return (
    <g filter={`url(#${f})`} opacity={hl === "skip" ? 0.65 : 1}>
      {node}
    </g>
  );
}

function KidPreview({ gender, hair }: { gender: "boy" | "girl"; hair: string }) {
  return (
    <svg viewBox="0 0 80 100" className="w-9 h-11">
      <ObjShape
        o={{ id: "preview", type: "kid", gender, fill: hair, x: 0, y: 0, w: 80, h: 100, color: "#fff", sw: 0 }}
        running={false}
        hideText={false}
      />
    </svg>
  );
}

function ObjShape({ o, running, hideText }: { o: Obj; running: boolean; hideText: boolean }) {
  const filled = !!o.fill && o.fill !== "none";
  const tcol = filled ? contrast(o.fill as string) : o.color;
  const txt = hideText ? "" : o.text || "";
  const fs = o.fs ?? 18;

  switch (o.type) {
    case "path":
      return (
        <path
          d={pathD(o.points || [])}
          fill="none"
          stroke={o.color}
          strokeWidth={o.sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "line":
      return (
        <line x1={o.x} y1={o.y} x2={o.x2 ?? o.x} y2={o.y2 ?? o.y} stroke={o.color} strokeWidth={o.sw} strokeLinecap="round" />
      );
    case "arrow": {
      const x2 = o.x2 ?? o.x;
      const y2 = o.y2 ?? o.y;
      return (
        <g>
          <line x1={o.x} y1={o.y} x2={x2} y2={y2} stroke={o.color} strokeWidth={o.sw} strokeLinecap="round" />
          <polygon points={arrowHead(o.x, o.y, x2, y2, 10 + o.sw * 2)} fill={o.color} />
        </g>
      );
    }
    case "rect":
      return (
        <g>
          <rect
            x={o.x}
            y={o.y}
            width={o.w}
            height={o.h}
            rx={10}
            fill={o.fill || "none"}
            stroke={filled ? "rgba(255,255,255,0.55)" : o.color}
            strokeWidth={o.sw}
          />
          {txt && <SvgText text={txt} x={o.x} y={o.y} w={o.w} h={o.h} fs={fs} color={tcol} />}
        </g>
      );
    case "ellipse":
      return (
        <g>
          <ellipse
            cx={o.x + o.w / 2}
            cy={o.y + o.h / 2}
            rx={o.w / 2}
            ry={o.h / 2}
            fill={o.fill || "none"}
            stroke={filled ? "rgba(255,255,255,0.55)" : o.color}
            strokeWidth={o.sw}
          />
          {txt && <SvgText text={txt} x={o.x + o.w * 0.12} y={o.y} w={o.w * 0.76} h={o.h} fs={fs} color={tcol} />}
        </g>
      );
    case "star":
    case "diamond":
    case "hexagon":
      return (
        <g>
          <polygon
            points={polyPoints(o.type, o.x, o.y, o.w, o.h)}
            fill={o.fill || "none"}
            stroke={filled ? "rgba(255,255,255,0.55)" : o.color}
            strokeWidth={o.sw}
            strokeLinejoin="round"
          />
          {txt && (
            <SvgText text={txt} x={o.x + o.w * 0.22} y={o.y} w={o.w * 0.56} h={o.h} fs={fs} color={tcol} />
          )}
        </g>
      );
    case "triangle":
      return (
        <g>
          <polygon
            points={`${o.x + o.w / 2},${o.y} ${o.x + o.w},${o.y + o.h} ${o.x},${o.y + o.h}`}
            fill={o.fill || "none"}
            stroke={filled ? "rgba(255,255,255,0.55)" : o.color}
            strokeWidth={o.sw}
            strokeLinejoin="round"
          />
          {txt && (
            <SvgText text={txt} x={o.x + o.w * 0.2} y={o.y + o.h * 0.3} w={o.w * 0.6} h={o.h * 0.7} fs={fs} color={tcol} />
          )}
        </g>
      );
    case "note":
      return (
        <g>
          <rect x={o.x} y={o.y} width={o.w} height={o.h} rx={6} fill={o.fill || "#46cdc8"} filter="url(#noteShadow)" />
          <path
            d={`M ${o.x + o.w - 22} ${o.y + o.h} L ${o.x + o.w} ${o.y + o.h - 22} L ${o.x + o.w} ${o.y + o.h} Z`}
            fill="rgba(0,0,0,0.18)"
          />
          {txt && <SvgText text={txt} x={o.x} y={o.y} w={o.w} h={o.h} fs={fs} color={tcol} />}
        </g>
      );
    case "paper":
      return (
        <g>
          <rect x={o.x} y={o.y} width={o.w} height={o.h} rx={4} fill={o.fill || "#f8fafc"} stroke="#cbd5e1" filter="url(#noteShadow)" />
          <line x1={o.x + 26} y1={o.y} x2={o.x + 26} y2={o.y + o.h} stroke="#f87171" strokeWidth={1.5} opacity={0.7} />
          {txt && (
            <SvgText text={txt} x={o.x + 20} y={o.y} w={o.w - 20} h={o.h} fs={fs} color={tcol} align="start" vAlign="top" />
          )}
        </g>
      );
    case "textbox":
      return (
        <g>
          <rect
            x={o.x}
            y={o.y}
            width={o.w}
            height={o.h}
            rx={8}
            fill="rgba(10,20,50,0.35)"
            stroke={o.color}
            strokeWidth={2}
            strokeDasharray="6 4"
          />
          {txt && <SvgText text={txt} x={o.x} y={o.y} w={o.w} h={o.h} fs={fs} color={o.color} />}
        </g>
      );
    case "text":
      return txt ? (
        <SvgText text={txt} x={o.x} y={o.y} w={o.w} h={o.h} fs={o.fs ?? 24} color={o.color} align="start" vAlign="top" />
      ) : null;
    case "image":
      return <image href={o.href} x={o.x} y={o.y} width={o.w} height={o.h} preserveAspectRatio="xMidYMid meet" />;
    case "sticker":
      return txt ? (
        <SvgText text={txt} x={o.x} y={o.y} w={o.w} h={o.h} fs={o.fs ?? 56} color="#ffffff" />
      ) : null;
    case "bubble":
      return (
        <g>
          <path d={bubblePath(o.x, o.y, o.w, o.h)} fill={o.fill || "#e0f2fe"} stroke="#22d3ee" strokeWidth={3} strokeLinejoin="round" />
          {txt && <SvgText text={txt} x={o.x} y={o.y} w={o.w} h={o.h} fs={o.fs ?? 20} color="#0a1432" bold />}
        </g>
      );
    case "block": {
      const kind: BlockKind = o.kind || "action";
      const col = o.fill || BLOCK_COLORS[kind];
      const common = {
        fill: col,
        stroke: running ? "#ffffff" : "rgba(255,255,255,0.55)",
        strokeWidth: running ? 4 : 2,
        filter: running ? "url(#runGlow)" : "url(#blockGlow)",
      };
      let shape: React.ReactNode;
      if (kind === "start") shape = <rect x={o.x} y={o.y} width={o.w} height={o.h} rx={o.h / 2} {...common} />;
      else if (kind === "decision")
        shape = (
          <polygon
            points={`${o.x + o.w / 2},${o.y} ${o.x + o.w},${o.y + o.h / 2} ${o.x + o.w / 2},${o.y + o.h} ${o.x},${o.y + o.h / 2}`}
            strokeLinejoin="round"
            {...common}
          />
        );
      else if (kind === "output")
        shape = (
          <polygon
            points={`${o.x + 18},${o.y} ${o.x + o.w},${o.y} ${o.x + o.w - 18},${o.y + o.h} ${o.x},${o.y + o.h}`}
            strokeLinejoin="round"
            {...common}
          />
        );
      else shape = <rect x={o.x} y={o.y} width={o.w} height={o.h} rx={kind === "loop" ? 18 : 12} {...common} />;
      const inner = kind === "decision";
      return (
        <g>
          {shape}
          {txt && (
            <SvgText
              text={txt}
              x={inner ? o.x + o.w * 0.2 : o.x}
              y={o.y}
              w={inner ? o.w * 0.6 : o.w}
              h={o.h}
              fs={18}
              color="#ffffff"
              bold
            />
          )}
        </g>
      );
    }
    case "kid": {
      const cx = o.x + o.w / 2;
      const r = Math.min(o.w, o.h) * 0.26;
      const cy = o.y + o.h * 0.34;
      const hair = o.fill || "#1f1f1f";
      const girl = o.gender === "girl";
      const bodyTop = cy + r * 0.9;
      const bottom = o.y + o.h;
      const cap = `M ${cx - r * 1.08} ${cy + r * 0.1} Q ${cx - r * 1.2} ${cy - r * 1.35} ${cx} ${cy - r * 1.22} Q ${cx + r * 1.2} ${cy - r * 1.35} ${cx + r * 1.08} ${cy + r * 0.1} Q ${cx + r * 0.75} ${cy - r * 0.55} ${cx + r * 0.1} ${cy - r * 0.5} Q ${cx - r * 0.75} ${cy - r * 0.6} ${cx - r * 1.08} ${cy + r * 0.1} Z`;
      return (
        <g>
          {/* invisible box so the whole kid is easy to grab */}
          <rect x={o.x} y={o.y} width={o.w} height={o.h} fill="transparent" />
          {girl && <rect x={cx - r * 1.15} y={cy - r * 0.6} width={r * 2.3} height={r * 2} rx={r * 0.6} fill={hair} />}
          {girl ? (
            <polygon
              points={`${cx - r * 0.6},${bodyTop} ${cx + r * 0.6},${bodyTop} ${cx + r * 1.35},${bottom} ${cx - r * 1.35},${bottom}`}
              fill="#f472b6"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth={1.5}
              strokeLinejoin="round"
            />
          ) : (
            <rect
              x={cx - r * 1.1}
              y={bodyTop}
              width={r * 2.2}
              height={bottom - bodyTop}
              rx={r * 0.5}
              fill="#4aa3ff"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth={1.5}
            />
          )}
          <circle cx={cx} cy={cy} r={r} fill="#f9c9a0" stroke="#e0a77a" strokeWidth={1.5} />
          <circle cx={cx - r * 0.38} cy={cy + r * 0.08} r={r * 0.11} fill="#1f2937" />
          <circle cx={cx + r * 0.38} cy={cy + r * 0.08} r={r * 0.11} fill="#1f2937" />
          <circle cx={cx - r * 0.6} cy={cy + r * 0.4} r={r * 0.14} fill="#fb7185" opacity={0.45} />
          <circle cx={cx + r * 0.6} cy={cy + r * 0.4} r={r * 0.14} fill="#fb7185" opacity={0.45} />
          <path
            d={`M ${cx - r * 0.32} ${cy + r * 0.42} Q ${cx} ${cy + r * 0.72} ${cx + r * 0.32} ${cy + r * 0.42}`}
            fill="none"
            stroke="#b4534b"
            strokeWidth={Math.max(1.5, r * 0.1)}
            strokeLinecap="round"
          />
          <path d={cap} fill={hair} />
          {girl && (
            <>
              <circle cx={cx - r * 1.22} cy={cy + r * 0.15} r={r * 0.42} fill={hair} />
              <circle cx={cx + r * 1.22} cy={cy + r * 0.15} r={r * 0.42} fill={hair} />
            </>
          )}
        </g>
      );
    }
    default:
      return null;
  }
}

/* =====================================================================
   MAIN PAGE
   ===================================================================== */
export default function Home() {
  /* ---------- state ---------- */
  const [objs, setObjs] = useState<Obj[]>([]);
  const [tool, setTool] = useState<Tool>("select");
  const [color, setColor] = useState("#22d3ee");
  const [width, setWidth] = useState(4);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [view, setView] = useState({ zoom: 1, pan: { x: 0, y: 0 } });
  const [showColor, setShowColor] = useState(false);
  const [menu, setMenu] = useState<null | "settings" | "share">(null);
  const [modal, setModal] = useState<null | "projects" | "templates">(null);
  const [showGrid, setShowGrid] = useState(true);
  const [autosave, setAutosave] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [projects, setProjects] = useState<SavedProject[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [runningId, setRunningId] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);

  // Question Lab
  const [panelOpen, setPanelOpen] = useState(true);
  const [lang, setLang] = useState<Lang>("python");
  const [activeQ, setActiveQ] = useState<Question | null>(null);
  const [runProg, setRunProg] = useState<Program | null>(null);
  const [trace, setTrace] = useState<Trace | null>(null);
  const [hl, setHl] = useState<{ id: string; tone: Tone } | null>(null);
  const [badges, setBadges] = useState<Record<string, Badge>>({});
  const [fast, setFast] = useState(false);
  const [hairColor, setHairColor] = useState(HAIR_COLORS[0].hex);
  const [helpLine, setHelpLine] = useState<number | null>(null);
  const stopRef = useRef(false);
  const runningRef = useRef(false);
  const fastRef = useRef(false);
  fastRef.current = fast;

  /* ---------- refs ---------- */
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<SVGGElement>(null);
  const defsRef = useRef<SVGDefsElement>(null);
  const imgInputRef = useRef<HTMLInputElement>(null);
  const openInputRef = useRef<HTMLInputElement>(null);
  const inter = useRef<Interaction>({ mode: "none" });
  const spaceDown = useRef(false);
  const undoStack = useRef<Obj[][]>([]);
  const redoStack = useRef<Obj[][]>([]);
  const objsRef = useRef<Obj[]>([]);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  objsRef.current = objs;

  /* ---------- helpers ---------- */
  const notify = (m: string) => {
    setToast(m);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  const pushHistory = () => {
    undoStack.current.push(objsRef.current);
    if (undoStack.current.length > 100) undoStack.current.shift();
    redoStack.current = [];
  };

  const undo = () => {
    const prev = undoStack.current.pop();
    if (!prev) return;
    redoStack.current.push(objsRef.current);
    objsRef.current = prev;
    setObjs(prev);
    setSelectedId(null);
    setEditingId(null);
  };

  const redo = () => {
    const next = redoStack.current.pop();
    if (!next) return;
    undoStack.current.push(objsRef.current);
    objsRef.current = next;
    setObjs(next);
    setSelectedId(null);
    setEditingId(null);
  };

  const getWorld = (e: { clientX: number; clientY: number }) => {
    const r = containerRef.current?.getBoundingClientRect();
    const left = r ? r.left : 0;
    const top = r ? r.top : 0;
    return {
      x: (e.clientX - left - view.pan.x) / view.zoom,
      y: (e.clientY - top - view.pan.y) / view.zoom,
    };
  };

  const viewCenter = () => {
    const r = containerRef.current?.getBoundingClientRect();
    const cx = r ? r.width / 2 : 400;
    const cy = r ? r.height / 2 : 250;
    const off = (objsRef.current.length % 6) * 18;
    return { x: (cx - view.pan.x) / view.zoom + off, y: (cy - view.pan.y) / view.zoom + off };
  };

  const zoomBy = (factor: number, cx?: number, cy?: number) =>
    setView((v) => {
      const nz = clamp(v.zoom * factor, 0.2, 4);
      const r = containerRef.current?.getBoundingClientRect();
      const px = cx ?? (r ? r.width / 2 : 0);
      const py = cy ?? (r ? r.height / 2 : 0);
      const wx = (px - v.pan.x) / v.zoom;
      const wy = (py - v.pan.y) / v.zoom;
      return { zoom: nz, pan: { x: px - wx * nz, y: py - wy * nz } };
    });

  const resetView = () => setView({ zoom: 1, pan: { x: 0, y: 0 } });

  const addObj = (o: Obj, startEdit = false) => {
    pushHistory();
    setObjs((prev) => [...prev, o]);
    setSelectedId(o.id);
    setTool("select");
    if (startEdit) setEditingId(o.id);
  };

  const deleteSelected = () => {
    if (!selectedId) {
      notify("Please select something first");
      return;
    }
    pushHistory();
    setObjs((prev) => prev.filter((o) => o.id !== selectedId));
    setSelectedId(null);
  };

  const clearAll = () => {
    if (!objsRef.current.length) return;
    if (!window.confirm("Clear the whole canvas?")) return;
    pushHistory();
    setObjs([]);
    setSelectedId(null);
    setEditingId(null);
  };

  const duplicateSelected = () => {
    const o = objsRef.current.find((x) => x.id === selectedId);
    if (!o) return;
    pushHistory();
    const copy = { ...moveObj(o, 24, 24), id: uid() };
    setObjs((prev) => [...prev, copy]);
    setSelectedId(copy.id);
  };

  const sendToBack = () => {
    if (!selectedId) return notify("Please select something first");
    pushHistory();
    setObjs((prev) => {
      const o = prev.find((x) => x.id === selectedId);
      return o ? [o, ...prev.filter((x) => x.id !== selectedId)] : prev;
    });
    notify("Sent to back");
  };

  const bringToFront = () => {
    if (!selectedId) return notify("Please select something first");
    pushHistory();
    setObjs((prev) => {
      const o = prev.find((x) => x.id === selectedId);
      return o ? [...prev.filter((x) => x.id !== selectedId), o] : prev;
    });
    notify("Brought to front");
  };

  const addBlock = (kind: BlockKind) => {
    const c = viewCenter();
    const d = BLOCK_DEF[kind];
    addObj({
      id: uid(),
      type: "block",
      kind,
      x: c.x - d.w / 2,
      y: c.y - d.h / 2,
      w: d.w,
      h: d.h,
      color: "#ffffff",
      sw: 2,
      text: d.label,
    });
  };

  const addSticker = (emoji: string) => {
    const c = viewCenter();
    addObj({ id: uid(), type: "sticker", x: c.x - 36, y: c.y - 36, w: 72, h: 72, color: "#fff", sw: 0, text: emoji, fs: 56 });
  };

  const addBubble = () => {
    const c = viewCenter();
    addObj(
      {
        id: uid(),
        type: "bubble",
        x: c.x - 100,
        y: c.y - 50,
        w: 200,
        h: 100,
        color: "#0a1432",
        fill: "#e0f2fe",
        sw: 3,
        text: "Idea!",
        fs: 20,
      },
      true
    );
  };

  const addImage = (href: string, pos?: { x: number; y: number }) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(1, 320 / Math.max(img.width, img.height));
      const w = img.width * s;
      const h = img.height * s;
      const c = pos || viewCenter();
      addObj({ id: uid(), type: "image", x: c.x - w / 2, y: c.y - h / 2, w, h, color: "#fff", sw: 0, href });
    };
    img.onerror = () => notify("Image could not be loaded");
    img.src = href;
  };

  const readImageFile = (f: File, pos?: { x: number; y: number }) => {
    const reader = new FileReader();
    reader.onload = () => addImage(reader.result as string, pos);
    reader.readAsDataURL(f);
  };

  const addImageFromUrl = async (url: string) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const reader = new FileReader();
      reader.onload = () => addImage(reader.result as string);
      reader.readAsDataURL(blob);
    } catch {
      notify("Image could not be added");
    }
  };

  const applyColor = (c: string) => {
    setColor(c);
    if (!selectedId) return;
    setObjs((prev) =>
      prev.map((o) => {
        if (o.id !== selectedId) return o;
        const filled = (o.fill && o.fill !== "none") || o.type === "block";
        return filled ? { ...o, fill: c } : { ...o, color: c };
      })
    );
  };

  const applyWidth = (v: number) => {
    setWidth(v);
    if (!selectedId) return;
    setObjs((prev) => prev.map((o) => (o.id === selectedId ? { ...o, sw: v } : o)));
  };

  const pickTool = (id: string) => {
    if (id === "color") {
      setShowColor((s) => !s);
      return;
    }
    if (id === "image") {
      imgInputRef.current?.click();
      return;
    }
    if (id === "delete") {
      deleteSelected();
      return;
    }
    setTool(id as Tool);
    setEditingId(null);
    if (id !== "select") setSelectedId(null);
  };

  /* ---------- text editing ---------- */
  const startEdit = (id: string, fresh = false) => {
    if (!fresh) pushHistory();
    setSelectedId(id);
    setEditingId(id);
  };

  const finishEdit = () => {
    const id = editingId;
    setEditingId(null);
    if (!id) return;
    setObjs((prev) => {
      const o = prev.find((x) => x.id === id);
      if (o && o.type === "text" && !(o.text || "").trim()) return prev.filter((x) => x.id !== id);
      return prev;
    });
  };

  const onEditChange = (val: string) => {
    setObjs((prev) =>
      prev.map((o) => {
        if (o.id !== editingId) return o;
        const n: Obj = { ...o, text: val };
        if (o.type === "text") {
          const fs = o.fs ?? 24;
          const lines = val.split("\n");
          n.w = Math.max(60, ...lines.map((l) => measure(l || " ", fs))) + 24;
          n.h = lines.length * fs * 1.25 + 16;
        }
        return n;
      })
    );
  };

  /* ---------- projects / files ---------- */
  const readProjects = (): SavedProject[] => {
    try {
      return JSON.parse(localStorage.getItem(PROJECTS_KEY) || "[]");
    } catch {
      return [];
    }
  };

  const openProjectsModal = () => {
    setProjects(readProjects());
    setModal("projects");
  };

  const saveProject = () => {
    const list = readProjects();
    const existing = list.find((p) => p.id === projectId);
    const name = window.prompt("Project name:", existing?.name || "My Project");
    if (!name) return;
    const id = existing?.id || uid();
    const entry: SavedProject = { id, name, updated: Date.now(), objs: objsRef.current };
    const next = existing ? list.map((p) => (p.id === id ? entry : p)) : [entry, ...list];
    try {
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
      setProjectId(id);
      notify("Project saved ✓");
    } catch {
      notify("Could not save (not enough storage space)");
    }
  };

  const loadObjs = (list: Obj[], id: string | null = null) => {
    pushHistory();
    setObjs(list);
    setSelectedId(null);
    setEditingId(null);
    setProjectId(id);
    resetView();
  };

  const newProject = () => {
    if (objsRef.current.length && !window.confirm("Start a new project? The current canvas will be cleared.")) return;
    loadObjs([], null);
  };

  const deleteProject = (id: string) => {
    const next = readProjects().filter((p) => p.id !== id);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(next));
    setProjects(next);
    if (projectId === id) setProjectId(null);
  };

  const onOpenFile = (f: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (!Array.isArray(data.objs)) throw new Error("bad");
        loadObjs(data.objs as Obj[]);
        notify("File opened ✓");
      } catch {
        notify("This file is not valid");
      }
    };
    reader.readAsText(f);
  };

  const exportPNG = () => {
    const cur = objsRef.current;
    if (!cur.length) return notify("Canvas is empty");
    const content = contentRef.current;
    const defs = defsRef.current;
    if (!content || !defs) return;
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    for (const o of cur) {
      const b = bbox(o);
      minX = Math.min(minX, b.x);
      minY = Math.min(minY, b.y);
      maxX = Math.max(maxX, b.x + b.w);
      maxY = Math.max(maxY, b.y + b.h + 30);
    }
    const pad = 40;
    minX -= pad;
    minY -= pad;
    const W = Math.max(50, maxX - minX + pad);
    const H = Math.max(50, maxY - minY + pad);
    const ser = new XMLSerializer();
    const inner = Array.from(content.childNodes)
      .map((n) => ser.serializeToString(n))
      .join("");
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${W * 2}" height="${H * 2}" viewBox="${minX} ${minY} ${W} ${H}"><rect x="${minX}" y="${minY}" width="${W}" height="${H}" fill="#040818"/>${ser.serializeToString(defs)}${inner}</svg>`;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = W * 2;
      canvas.height = H * 2;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((b) => {
        if (!b) return notify("Export failed");
        const url = URL.createObjectURL(b);
        download(url, "brain-visual-system.png");
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        notify("PNG downloaded ✓");
      });
    };
    img.onerror = () => notify("Export failed");
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify({ objs: objsRef.current }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    download(url, "brain-visual-system.json");
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  };

  const copyJSON = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({ objs: objsRef.current }));
      notify("Project data copied ✓");
    } catch {
      notify("Could not copy");
    }
  };

  /* ---------- Run (glow blocks in order) ---------- */
  const runFlow = async () => {
    if (runningRef.current) return;
    const blocks = objsRef.current.filter((o) => o.type === "block");
    if (!blocks.length) return notify("Add blocks like Start / Action first");
    const arrows = objsRef.current.filter((o) => o.type === "arrow" || o.type === "line");
    const inside = (b: Obj, x: number, y: number) =>
      x >= b.x - 14 && x <= b.x + b.w + 14 && y >= b.y - 14 && y <= b.y + b.h + 14;
    const nextBlock = (c: Obj): Obj | undefined => {
      for (const a of arrows) {
        if (!inside(c, a.x, a.y)) continue;
        const t = blocks.find((b) => b.id !== c.id && inside(b, a.x2 ?? a.x, a.y2 ?? a.y));
        if (t) return t;
      }
      return undefined;
    };
    let order: Obj[] = [];
    const startB = blocks.find((b) => b.kind === "start");
    if (startB && arrows.length) {
      const seen = new Set<string>();
      let cur: Obj | undefined = startB;
      while (cur && !seen.has(cur.id) && order.length < 60) {
        order.push(cur);
        seen.add(cur.id);
        cur = nextBlock(cur);
      }
    }
    if (order.length < 2) order = [...blocks].sort((a, b) => a.y - b.y || a.x - b.x);
    runningRef.current = true;
    stopRef.current = false;
    setRunning(true);
    setSelectedId(null);
    for (const b of order) {
      if (stopRef.current) break;
      setRunningId(b.id);
      await sleep(650);
    }
    setRunningId(null);
    runningRef.current = false;
    setRunning(false);
    if (!stopRef.current) notify("Run complete ✓");
  };

  /* ---------- Question Lab: run the selected question step by step ---------- */
  const runQuestion = async (q: Question) => {
    if (runningRef.current) return;
    const p = buildProgram(q, thingsOf(objsRef.current), lang);
    runningRef.current = true;
    stopRef.current = false;
    setRunning(true);
    setSelectedId(null);
    setBadges({});
    setRunProg(p);
    setHelpLine(null);
    const out: string[] = [];
    for (const s of p.steps) {
      if (stopRef.current) break;
      if (s.out) out.push(s.out);
      setTrace({ line: s.line, vars: s.vars, note: s.note, out: [...out], done: false });
      setHl(s.obj ? { id: s.obj, tone: s.tone || "check" } : null);
      const bd = s.badge;
      const oid = s.obj;
      if (bd && oid) setBadges((prev) => ({ ...prev, [oid]: bd }));
      await sleep(fastRef.current ? 250 : 800);
    }
    const stopped = stopRef.current;
    setHl(null);
    setTrace((t) =>
      t ? { ...t, done: true, answer: stopped ? undefined : p.answer, note: stopped ? "Program stopped ⏹" : t.note } : t
    );
    runningRef.current = false;
    setRunning(false);
    if (!stopped) notify(`Answer: ${p.answer} 🎉`);
  };

  const onRun = () => {
    if (runningRef.current) {
      stopRef.current = true;
      return;
    }
    if (activeQ) runQuestion(activeQ);
    else runFlow();
  };

  const selectQuestion = (q: Question) => {
    if (runningRef.current) return;
    setActiveQ((prev) => (prev?.id === q.id ? null : q));
    setTrace(null);
    setRunProg(null);
    setBadges({});
    setHelpLine(null);
  };

  const changeLang = (l: Lang) => {
    if (runningRef.current) return;
    setLang(l);
    setTrace(null);
    setRunProg(null);
    setBadges({});
    setHelpLine(null);
  };

  const addKid = (gender: "boy" | "girl") => {
    const c = viewCenter();
    addObj({ id: uid(), type: "kid", gender, x: c.x - 40, y: c.y - 50, w: 80, h: 100, color: "#ffffff", fill: hairColor, sw: 0 });
  };

  /* ---------- effects ---------- */
  // autosave restore
  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTOSAVE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setObjs(parsed);
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  // autosave write
  useEffect(() => {
    if (!loaded || !autosave) return;
    const t = setTimeout(() => {
      try {
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(objs));
      } catch {
        /* ignore */
      }
    }, 400);
    return () => clearTimeout(t);
  }, [objs, loaded, autosave]);

  // wheel: ctrl = zoom, normal = pan
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const r = el.getBoundingClientRect();
      if (e.ctrlKey || e.metaKey) {
        zoomBy(e.deltaY < 0 ? 1.1 : 1 / 1.1, e.clientX - r.left, e.clientY - r.top);
      } else {
        setView((v) => ({ ...v, pan: { x: v.pan.x - e.deltaX, y: v.pan.y - e.deltaY } }));
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keyboard
  const actionsRef = useRef({
    undo,
    redo,
    deleteSelected,
    duplicateSelected,
    escape: () => {},
    setTool: (t: Tool) => {
      void t;
    },
  });
  actionsRef.current = {
    undo,
    redo,
    deleteSelected,
    duplicateSelected,
    escape: () => {
      setTool("select");
      setSelectedId(null);
      setShowColor(false);
      setMenu(null);
    },
    setTool: (t: Tool) => {
      setTool(t);
      if (t !== "select") setSelectedId(null);
    },
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT")) return;
      const a = actionsRef.current;
      const mod = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      if (mod && k === "z") {
        e.preventDefault();
        if (e.shiftKey) a.redo();
        else a.undo();
        return;
      }
      if (mod && k === "y") {
        e.preventDefault();
        a.redo();
        return;
      }
      if (mod && k === "d") {
        e.preventDefault();
        a.duplicateSelected();
        return;
      }
      if (mod) return;
      if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        a.deleteSelected();
      } else if (e.key === "Escape") a.escape();
      else if (e.code === "Space") {
        e.preventDefault();
        spaceDown.current = true;
      } else if (k === "v") a.setTool("select");
      else if (k === "p") a.setTool("pencil");
      else if (k === "e") a.setTool("eraser");
      else if (k === "t") a.setTool("text");
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") spaceDown.current = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  /* ---------- pointer interaction ---------- */
  const eraseAt = (p: { x: number; y: number }) => {
    const it = inter.current;
    if (it.mode !== "erase") return;
    const tol = 10 / view.zoom;
    const kill = objsRef.current.filter((o) => hitTest(o, p.x, p.y, tol));
    if (!kill.length) return;
    if (!it.pushed) {
      pushHistory();
      it.pushed = true;
    }
    const ids = new Set(kill.map((k) => k.id));
    setObjs((prev) => prev.filter((o) => !ids.has(o.id)));
    if (selectedId && ids.has(selectedId)) setSelectedId(null);
  };

  const onPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (editingId) return;
    setMenu(null);
    const svg = svgRef.current;
    if (!svg) return;
    if (e.button === 1 || (e.button === 0 && spaceDown.current)) {
      svg.setPointerCapture(e.pointerId);
      inter.current = { mode: "pan", sx: e.clientX, sy: e.clientY, ox: view.pan.x, oy: view.pan.y };
      return;
    }
    if (e.button !== 0) return;
    svg.setPointerCapture(e.pointerId);
    const p = getWorld(e);
    const tol = 8 / view.zoom;

    switch (tool) {
      case "select": {
        const sel = objs.find((o) => o.id === selectedId);
        if (sel) {
          for (const h of handlesOf(sel)) {
            if (Math.hypot((h.x - p.x) * view.zoom, (h.y - p.y) * view.zoom) <= 12) {
              pushHistory();
              inter.current = { mode: "resize", id: sel.id, handle: h.name };
              return;
            }
          }
        }
        for (let i = objs.length - 1; i >= 0; i--) {
          if (hitTest(objs[i], p.x, p.y, tol)) {
            setSelectedId(objs[i].id);
            inter.current = { mode: "move", id: objs[i].id, lastX: p.x, lastY: p.y, moved: false };
            return;
          }
        }
        setSelectedId(null);
        inter.current = { mode: "pan", sx: e.clientX, sy: e.clientY, ox: view.pan.x, oy: view.pan.y };
        return;
      }
      case "pencil": {
        pushHistory();
        const id = uid();
        setObjs((prev) => [
          ...prev,
          { id, type: "path", x: 0, y: 0, w: 0, h: 0, points: [[p.x, p.y]], color, sw: width },
        ]);
        setSelectedId(null);
        inter.current = { mode: "draw", id };
        return;
      }
      case "eraser": {
        inter.current = { mode: "erase", pushed: false };
        eraseAt(p);
        return;
      }
      case "text": {
        pushHistory();
        const id = uid();
        setObjs((prev) => [
          ...prev,
          { id, type: "text", x: p.x, y: p.y, w: 60, h: 40, color, sw: 0, text: "", fs: 24 },
        ]);
        setTool("select");
        setSelectedId(id);
        setEditingId(id);
        inter.current = { mode: "none" };
        return;
      }
      default: {
        pushHistory();
        const o = newShape(tool, p.x, p.y, color, width);
        setObjs((prev) => [...prev, o]);
        inter.current = { mode: "create", id: o.id, startX: p.x, startY: p.y, moved: false };
      }
    }
  };

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (tool === "eraser") {
      const r = containerRef.current?.getBoundingClientRect();
      if (r) setCursorPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    }
    const it = inter.current;
    if (it.mode === "none") return;

    if (it.mode === "pan") {
      const nx = it.ox + (e.clientX - it.sx);
      const ny = it.oy + (e.clientY - it.sy);
      setView((v) => ({ ...v, pan: { x: nx, y: ny } }));
      return;
    }

    const p = getWorld(e);

    if (it.mode === "draw") {
      const id = it.id;
      setObjs((prev) =>
        prev.map((o) => {
          if (o.id !== id || !o.points) return o;
          const last = o.points[o.points.length - 1];
          if (Math.hypot(p.x - last[0], p.y - last[1]) < 1.5 / view.zoom) return o;
          return { ...o, points: [...o.points, [p.x, p.y] as Pt] };
        })
      );
      return;
    }

    if (it.mode === "erase") {
      eraseAt(p);
      return;
    }

    if (it.mode === "move") {
      const dx = p.x - it.lastX;
      const dy = p.y - it.lastY;
      if (!it.moved) {
        if (Math.hypot(dx, dy) * view.zoom < 3) return;
        pushHistory();
        it.moved = true;
      }
      it.lastX = p.x;
      it.lastY = p.y;
      const id = it.id;
      setObjs((prev) => prev.map((o) => (o.id === id ? moveObj(o, dx, dy) : o)));
      return;
    }

    if (it.mode === "resize") {
      const { id, handle } = it;
      setObjs((prev) => prev.map((o) => (o.id === id ? resizeObj(o, handle, p) : o)));
      return;
    }

    if (it.mode === "create") {
      const { id, startX, startY } = it;
      const dx = p.x - startX;
      const dy = p.y - startY;
      if (Math.hypot(dx, dy) * view.zoom > 4) it.moved = true;
      setObjs((prev) =>
        prev.map((o) => {
          if (o.id !== id) return o;
          if (o.type === "line" || o.type === "arrow") return { ...o, x2: p.x, y2: p.y };
          return { ...o, x: Math.min(startX, p.x), y: Math.min(startY, p.y), w: Math.abs(dx), h: Math.abs(dy) };
        })
      );
    }
  };

  const onPointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    const it = inter.current;
    inter.current = { mode: "none" };
    try {
      svgRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    if (it.mode === "create") {
      const { id, startX, startY, moved } = it;
      const target = objsRef.current.find((o) => o.id === id);
      if (!target) return;
      const isLine = target.type === "line" || target.type === "arrow";
      if (isLine && !moved) {
        setObjs((prev) => prev.filter((o) => o.id !== id));
        return;
      }
      if (!isLine && (!moved || target.w < 10 || target.h < 10)) {
        const d = SHAPE_DEFAULT[target.type] || { w: 140, h: 90 };
        setObjs((prev) =>
          prev.map((o) => (o.id === id ? { ...o, x: startX - d.w / 2, y: startY - d.h / 2, w: d.w, h: d.h } : o))
        );
      }
      setSelectedId(id);
      setTool("select");
      if (target.type === "note" || target.type === "paper" || target.type === "textbox") {
        setEditingId(id);
      }
    }
  };

  const onDoubleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (tool !== "select") return;
    const p = getWorld(e);
    const tol = 8 / view.zoom;
    for (let i = objs.length - 1; i >= 0; i--) {
      const o = objs[i];
      if (hitTest(o, p.x, p.y, tol) && TEXT_TYPES.includes(o.type)) {
        startEdit(o.id);
        return;
      }
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) readImageFile(f, getWorld(e));
  };

  // board changed → clear old number badges / result
  useEffect(() => {
    if (runningRef.current) return;
    setBadges({});
    setTrace(null);
    setRunProg(null);
  }, [objs]);

  /* ---------- derived ---------- */
  const things = useMemo(() => thingsOf(objs), [objs]);
  const questions = useMemo(() => suggestQuestions(things), [things]);
  const previewProg = useMemo(() => (activeQ ? buildProgram(activeQ, things, lang) : null), [activeQ, things, lang]);
  const shownProg = trace && runProg ? runProg : previewProg;
  const explainLine = trace && !trace.done ? trace.line : helpLine;
  const curConcept = shownProg && explainLine != null ? shownProg.lines[explainLine]?.concept : undefined;

  const sel = objs.find((o) => o.id === selectedId) || null;
  const editingObj = objs.find((o) => o.id === editingId) || null;

  const cursor =
    tool === "select"
      ? "default"
      : tool === "eraser"
      ? "none"
      : tool === "text"
      ? "text"
      : "crosshair";

  const leftTools: { id: string; icon: React.ReactNode; title: string }[] = [
    { id: "select", icon: <GiArrowCursor />, title: "Select / Move (V)" },
    { id: "pencil", icon: <FaPencil />, title: "Pencil (P)" },
    { id: "eraser", icon: <LuEraser />, title: "Eraser (E)" },
    { id: "color", icon: <HiColorSwatch />, title: "Color & Size" },
    { id: "paper", icon: <PiNotebookBold />, title: "Notebook page" },
    { id: "line", icon: <FaEnvelopeOpen />, title: "Line" },
    { id: "arrow", icon: <CgArrowsExpandUpRight />, title: "Arrow" },
    { id: "text", icon: <RxText />, title: "Text (T)" },
    { id: "image", icon: <FaRegImage />, title: "Insert image" },
    { id: "delete", icon: <RiDeleteBin6Fill />, title: "Delete selected (Del)" },
  ];

  const shapeTools: { id: Tool; icon: React.ReactNode; cls: string; title: string }[] = [
    { id: "ellipse", icon: <FaRegCircle />, cls: "text-[#4aa3ff]", title: "Circle" },
    { id: "triangle", icon: <FiTriangle />, cls: "text-[#4aa3ff]", title: "Triangle" },
    { id: "square", icon: <FaRegSquare />, cls: "text-[#4aa3ff]", title: "Square" },
    { id: "star", icon: <FaRegStar />, cls: "text-[#4aa3ff]", title: "Star" },
    { id: "diamond", icon: <BsDiamond />, cls: "text-[#4aa3ff]", title: "Diamond" },
    { id: "hexagon", icon: <BsHexagon />, cls: "text-[#4aa3ff]", title: "Hexagon" },
    { id: "rectY", icon: <FaSquare />, cls: "text-[#fed154]", title: "Yellow box" },
    { id: "rectP", icon: <FaSquare />, cls: "text-[#fa7ead]", title: "Pink box" },
    { id: "rectG", icon: <FaSquare />, cls: "text-[#5ee08a]", title: "Green box" },
    { id: "rectB", icon: <FaSquare />, cls: "text-[#60a5fa]", title: "Blue box" },
    { id: "note", icon: <FaStickyNote />, cls: "text-[#46cdc8]", title: "Sticky note" },
    { id: "textbox", icon: <PiNotePencilDuotone />, cls: "text-[#4aa3ff]", title: "Text box" },
    { id: "paper", icon: <IoMdPaper />, cls: "text-[#4aa3ff]", title: "Paper note" },
  ];

  const navItems: { label: string; action: () => void }[] = [
    { label: "My Projects", action: openProjectsModal },
    { label: "New Project", action: newProject },
    { label: "Templates", action: () => setModal("templates") },
    { label: "Open", action: () => openInputRef.current?.click() },
    { label: "Save", action: saveProject },
    { label: "Export", action: exportPNG },
    { label: panelOpen ? "Hide Questions" : "Questions", action: () => setPanelOpen((p) => !p) },
  ];

  const zoomPct = Math.round(view.zoom * 100);

  /* =====================================================================
     RENDER
     ===================================================================== */
  return (
    <div className="relative w-full min-h-screen bg-[#050b1f] text-slate-100 p-4 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes neonPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes toastIn { from { opacity: 0; transform: translate(-50%, 16px); } to { opacity: 1; transform: translate(-50%, 0); } }
        .neon-pulse { animation: neonPulse 2.5s ease-in-out infinite; }
        .slide-in { animation: slideIn .6s ease-out both; }
        .toast-in { animation: toastIn .3s ease-out both; }
        .neon-text { text-shadow: 0 0 12px rgba(34,211,238,.7), 0 0 30px rgba(34,211,238,.35); }
      `,
        }}
      />

      {/* hidden inputs */}
      <input
        ref={imgInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) readImageFile(f);
          e.target.value = "";
        }}
      />
      <input
        ref={openInputRef}
        type="file"
        accept="application/json,.json"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onOpenFile(f);
          e.target.value = "";
        }}
      />

      {/* Neon blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl neon-pulse pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl neon-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl neon-pulse pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-3 min-h-[calc(100vh-2rem)]">
        {/* =================== HEADER =================== */}
        <div className="slide-in relative z-30 rounded-3xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.18)] px-3 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center">
            <img className="h-12 w-12 ml-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" src="/brick.png" alt="" />
            <div className="flex items-center gap-2 px-3 py-1 ml-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl rounded-tl-md shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <img className="w-8 h-8" src="/puzzle.png" alt="" />
              <h1 className="text-white text-2xl font-bold pr-2 whitespace-nowrap">Brain Visual System</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-y-1 text-slate-200 text-lg items-center justify-center flex-1">
            {navItems.map((n, i) => (
              <button
                key={i}
                type="button"
                onClick={n.action}
                className="px-4 whitespace-nowrap border-r border-cyan-400/30 last:border-0 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] transition"
              >
                {n.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 px-2">
            <a
              href="/admin"
              title="Back to Admin"
              className="text-purple-300 text-3xl pr-3 border-r border-cyan-400/30 hover:text-cyan-300 hover:-translate-x-1 transition"
            >
              <IoArrowBack />
            </a>

            {/* Settings */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenu((m) => (m === "settings" ? null : "settings"))}
                className="flex items-center text-slate-100 text-2xl gap-2 hover:text-cyan-300 transition"
              >
                <span className="text-orange-400 text-4xl drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">
                  <HiOutlineLightBulb />
                </span>
                Settings
              </button>
              {menu === "settings" && (
                <div className="absolute right-0 top-full mt-3 w-60 rounded-2xl border border-cyan-400/40 bg-[#0a1432] p-3 shadow-[0_0_30px_rgba(34,211,238,0.3)] z-50 text-base">
                  <label className="flex items-center justify-between gap-3 py-2 cursor-pointer">
                    <span>Show grid</span>
                    <input type="checkbox" checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} className="h-5 w-5 accent-cyan-400" />
                  </label>
                  <label className="flex items-center justify-between gap-3 py-2 cursor-pointer">
                    <span>Auto-save</span>
                    <input type="checkbox" checked={autosave} onChange={(e) => setAutosave(e.target.checked)} className="h-5 w-5 accent-cyan-400" />
                  </label>
                  <button type="button" onClick={resetView} className="w-full text-left py-2 hover:text-cyan-300 transition">
                    Reset zoom &amp; position
                  </button>
                </div>
              )}
            </div>

            {/* Share */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenu((m) => (m === "share" ? null : "share"))}
                className="bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 rounded-xl text-white font-bold text-xl flex items-center gap-2 border border-white/25 shadow-[0_4px_0_rgba(0,0,0,.45),0_0_18px_rgba(52,211,153,0.6)] hover:-translate-y-1 hover:scale-105 transition"
              >
                <IoShareSocialOutline />
                Share
                <span className="flex items-center text-3xl -mr-2">
                  <RiArrowDropDownLine />
                </span>
              </button>
              {menu === "share" && (
                <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-emerald-400/40 bg-[#0a1432] p-2 shadow-[0_0_30px_rgba(52,211,153,0.3)] z-50 text-base">
                  <button type="button" onClick={() => { exportPNG(); setMenu(null); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    Download as PNG image
                  </button>
                  <button type="button" onClick={() => { downloadJSON(); setMenu(null); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    Download project file (.json)
                  </button>
                  <button type="button" onClick={() => { copyJSON(); setMenu(null); }} className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition">
                    Copy project data
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =================== BODY =================== */}
        <div className="flex flex-1 gap-3">
          {/* ---------- Left toolbar ---------- */}
          <div className="shrink-0 w-[4.5rem] flex flex-col gap-4">
            <div className="rounded-2xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.15)] overflow-hidden">
              {leftTools.map((t) => (
                <div key={t.id} className="border-b border-cyan-400/20 flex justify-center">
                  <Ico
                    title={t.title}
                    className="text-cyan-300 py-2.5 w-full"
                    active={t.id === "color" ? showColor : tool === t.id}
                    onClick={() => pickTool(t.id)}
                  >
                    {t.icon}
                  </Ico>
                </div>
              ))}
              <button
                type="button"
                title="Reset zoom"
                onClick={resetView}
                className="w-full text-slate-200 text-lg flex items-center justify-center py-3 hover:text-cyan-300 transition"
              >
                {zoomPct}%
              </button>
            </div>

            <div className="rounded-2xl border border-purple-500/40 bg-[#0a1432]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(168,85,247,0.2)] overflow-hidden">
              <div className="border-b border-purple-400/20 flex justify-center">
                <Ico title="Clear canvas" className="text-purple-300 py-2.5 w-full" onClick={clearAll}>
                  <RiDeleteBin6Fill />
                </Ico>
              </div>
              <button
                type="button"
                title="Zoom in"
                onClick={() => zoomBy(1.2)}
                className="w-full text-slate-200 text-2xl flex items-center justify-center py-2 border-b border-purple-400/20 hover:text-purple-300 transition"
              >
                +
              </button>
              <button
                type="button"
                title="Zoom out"
                onClick={() => zoomBy(1 / 1.2)}
                className="w-full text-slate-200 text-2xl flex items-center justify-center py-2 hover:text-purple-300 transition"
              >
                −
              </button>
            </div>
          </div>

          {/* ---------- Right content ---------- */}
          <div className="flex-1 min-w-0 flex flex-col rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
            {/* ===== TOP TOOLBAR ===== */}
            <div className="bg-[#0a1432]/95 backdrop-blur-xl border-b border-cyan-400/40 px-3 py-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <Group>
                  <Ico title="Speech bubble" onClick={addBubble}>
                    <GiSmokeBomb />
                  </Ico>
                </Group>
                <Group>
                  <Ico title="Undo (Ctrl+Z)" onClick={undo}>
                    <FaUndoAlt />
                  </Ico>
                  <Ico title="Redo (Ctrl+Y)" onClick={redo}>
                    <FaRedoAlt />
                  </Ico>
                </Group>
              </div>

              <div className="flex flex-wrap justify-center gap-4 flex-1">
                <BlockButton color="#3da036" label="Start" icon={<FaPlay />} iconClass="text-[#fecb35]" onClick={() => addBlock("start")} />
                <BlockButton color="#f13c4e" label="Action" icon={<IoIosSettings />} iconClass="text-4xl" onClick={() => addBlock("action")} />
                <BlockButton color="#fe8d10" label="Decision" icon={<PiQuestionMarkBold />} iconClass="text-4xl" onClick={() => addBlock("decision")} />
                <BlockButton color="#543bd2" label="Output" icon={<FaFontAwesomeFlag />} onClick={() => addBlock("output")} />
                <BlockButton color="#f8548d" label="Loop" icon={<RiLoopRightFill />} onClick={() => addBlock("loop")} />
                <BlockButton
                  color={running ? "#f13c4e" : "#359236"}
                  label={running ? "Stop" : "Run"}
                  icon={<FaPlay />}
                  onClick={onRun}
                />
              </div>

              <div className="flex items-center gap-1">
                <Group>
                  <Ico size="text-5xl" className="text-cyan-300 p-0" title="Save project" onClick={saveProject}>
                    <WiSmoke />
                  </Ico>
                </Group>
                {["/boy.png", "/child.png", "/boy.png"].map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    title="Add avatar"
                    onClick={() => addImageFromUrl(src)}
                    className="rounded-xl border border-cyan-400/30 bg-white/5 hover:scale-110 hover:shadow-[0_0_14px_rgba(34,211,238,0.6)] transition"
                  >
                    <img className="w-10 h-10" src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>

            {/* ===== CANVAS ===== */}
            <div
              ref={containerRef}
              className="relative flex-1 min-h-[420px] bg-[#040818] overflow-hidden select-none"
              style={
                showGrid
                  ? {
                      backgroundImage: "radial-gradient(rgba(34,211,238,0.45) 1px, transparent 1px)",
                      backgroundSize: `${28 * view.zoom}px ${28 * view.zoom}px`,
                      backgroundPosition: `${view.pan.x}px ${view.pan.y}px`,
                    }
                  : undefined
              }
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(168,85,247,0.18)] pointer-events-none" />

              <svg
                ref={svgRef}
                className="absolute inset-0 w-full h-full touch-none"
                style={{ cursor }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={() => setCursorPos(null)}
                onDoubleClick={onDoubleClick}
              >
                <defs ref={defsRef}>
                  <filter id="blockGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.45" />
                  </filter>
                  <filter id="runGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="9" floodColor="#22d3ee" floodOpacity="1" />
                  </filter>
                  <filter id="matchGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#4ade80" floodOpacity="1" />
                  </filter>
                  <filter id="skipGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f87171" floodOpacity="0.9" />
                  </filter>
                  <filter id="noteShadow" x="-20%" y="-20%" width="140%" height="150%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
                  </filter>
                </defs>

                <g ref={contentRef} transform={`translate(${view.pan.x} ${view.pan.y}) scale(${view.zoom})`}>
                  {objs.map((o) => (
                    <ObjView
                      key={o.id}
                      o={o}
                      running={runningId === o.id}
                      hideText={editingId === o.id}
                      hl={hl && hl.id === o.id ? hl.tone : undefined}
                    />
                  ))}
                </g>

                {/* selection UI */}
                <g transform={`translate(${view.pan.x} ${view.pan.y}) scale(${view.zoom})`}>
                  {sel && !editingId && (
                    <>
                      {(() => {
                        const b = bbox(sel);
                        const pd = 6 / view.zoom;
                        return (
                          <rect
                            x={b.x - pd}
                            y={b.y - pd}
                            width={b.w + pd * 2}
                            height={b.h + pd * 2}
                            fill="none"
                            stroke="#22d3ee"
                            strokeWidth={1.5 / view.zoom}
                            strokeDasharray={`${6 / view.zoom} ${4 / view.zoom}`}
                            pointerEvents="none"
                          />
                        );
                      })()}
                      {handlesOf(sel).map((h) => (
                        <circle
                          key={h.name}
                          cx={h.x}
                          cy={h.y}
                          r={6 / view.zoom}
                          fill="#0a1432"
                          stroke="#22d3ee"
                          strokeWidth={2 / view.zoom}
                          pointerEvents="none"
                        />
                      ))}
                    </>
                  )}

                  {/* Question Lab: the item being checked right now */}
                  {hl &&
                    (() => {
                      const o = objs.find((x) => x.id === hl.id);
                      if (!o) return null;
                      const b = bbox(o);
                      const pd = 10;
                      const col = hl.tone === "match" ? "#4ade80" : hl.tone === "skip" ? "#f87171" : "#22d3ee";
                      return (
                        <rect
                          x={b.x - pd}
                          y={b.y - pd}
                          width={b.w + pd * 2}
                          height={b.h + pd * 2}
                          rx={12}
                          fill="none"
                          stroke={col}
                          strokeWidth={3 / view.zoom}
                          strokeDasharray={`${8 / view.zoom} ${5 / view.zoom}`}
                          pointerEvents="none"
                        />
                      );
                    })()}

                  {/* Question Lab: counting number badges */}
                  {Object.entries(badges).map(([id, bd]) => {
                    const o = objs.find((x) => x.id === id);
                    if (!o) return null;
                    const b = bbox(o);
                    const r = 14 / view.zoom;
                    return (
                      <g key={id} pointerEvents="none">
                        <circle
                          cx={b.x + b.w}
                          cy={b.y}
                          r={r}
                          fill={bd.tone === "a" ? "#22c55e" : "#ec4899"}
                          stroke="#ffffff"
                          strokeWidth={2 / view.zoom}
                        />
                        <text
                          x={b.x + b.w}
                          y={b.y + 5 / view.zoom}
                          textAnchor="middle"
                          fontSize={15 / view.zoom}
                          fontWeight={800}
                          fill="#ffffff"
                          fontFamily={FONT}
                        >
                          {bd.n}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>

              {/* text editor overlay */}
              {editingObj && (
                <textarea
                  autoFocus
                  value={editingObj.text || ""}
                  onChange={(e) => onEditChange(e.target.value)}
                  onBlur={finishEdit}
                  onFocus={(e) => {
                    const n = e.currentTarget.value.length;
                    e.currentTarget.setSelectionRange(n, n);
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    if (e.key === "Escape" || (e.key === "Enter" && (e.ctrlKey || e.metaKey))) {
                      e.currentTarget.blur();
                    }
                  }}
                  className="absolute z-20 resize-none outline-none rounded-md border border-cyan-300 bg-[#0a1432]/90 text-slate-100 p-1 shadow-[0_0_14px_rgba(34,211,238,0.6)]"
                  style={{
                    left: editingObj.x * view.zoom + view.pan.x,
                    top: editingObj.y * view.zoom + view.pan.y,
                    width: Math.max(editingObj.w, 110) * view.zoom,
                    height: Math.max(editingObj.h, 36) * view.zoom,
                    fontSize: (editingObj.type === "text" ? editingObj.fs ?? 24 : editingObj.fs ?? 18) * view.zoom,
                    fontFamily: FONT,
                    textAlign:
                      editingObj.type === "text" || editingObj.type === "paper" ? "left" : "center",
                  }}
                />
              )}

              {/* eraser circle */}
              {tool === "eraser" && cursorPos && (
                <div
                  className="absolute pointer-events-none rounded-full border-2 border-cyan-300 bg-cyan-300/10 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  style={{ left: cursorPos.x - 10, top: cursorPos.y - 10, width: 20, height: 20 }}
                />
              )}

              {/* color & size panel */}
              {showColor && (
                <div className="absolute top-3 left-3 z-20 w-60 rounded-2xl border border-cyan-400/50 bg-[#0a1432]/95 backdrop-blur-xl p-3 shadow-[0_0_26px_rgba(34,211,238,0.35)]">
                  <p className="text-sm text-cyan-300 mb-2 font-semibold">Color</p>
                  <div className="grid grid-cols-6 gap-2">
                    {PALETTE.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => applyColor(c)}
                        className={`h-7 w-7 rounded-full border-2 transition hover:scale-110 ${
                          color === c ? "border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "border-white/20"
                        }`}
                        style={{ background: c }}
                        title={c}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-cyan-300 mt-3 mb-1 font-semibold">Size: {width}px</p>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={width}
                    onChange={(e) => applyWidth(Number(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                  <p className="text-xs text-slate-400 mt-2">
                    {sel ? "Also applies to the selected item" : "Applies to new drawings"}
                  </p>
                </div>
              )}

              {/* tool chip */}
              <div className="absolute top-3 right-4 z-10 text-xs px-3 py-1 rounded-full border border-cyan-400/40 bg-[#0a1432]/80 text-cyan-200 pointer-events-none">
                {TOOL_NAMES[tool]} • {zoomPct}%
              </div>

              {/* empty hint */}
              {objs.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <p className="text-slate-500 text-lg text-center px-6">
                    The canvas is empty ✨<br />
                    <span className="text-sm">
                      Pick the Pencil on the left, add a shape or kid 👦👧 from below, or a block from above — questions will appear automatically
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* ===== BOTTOM TOOLBAR ===== */}
            <div className="bg-[#0a1432]/95 backdrop-blur-xl border-t border-cyan-400/40 px-3 py-2 flex flex-wrap items-center justify-between gap-3">
              <Group>
                {shapeTools.map((s) => (
                  <Ico key={s.id} className={s.cls} title={s.title} active={tool === s.id} onClick={() => pickTool(s.id)}>
                    {s.icon}
                  </Ico>
                ))}
              </Group>

              <Group>
                <Ico className="text-[#e7bb35]" size="text-4xl" title="Thumbs up" onClick={() => addSticker("👍")}>
                  <IoIosThumbsUp />
                </Ico>
                <Ico className="text-[#f0a91b]" title="Handshake" onClick={() => addSticker("🤝")}>
                  <FaHandshake />
                </Ico>
                <Ico className="text-[#4faaf5]" title="Fire" onClick={() => addSticker("🔥")}>
                  <HiFire />
                </Ico>
                <Ico className="text-[#fd4e50]" title="Heart" onClick={() => addSticker("❤️")}>
                  <BsHeartFill />
                </Ico>
                <Ico className="text-[#fecb35]" title="Star" onClick={() => addSticker("⭐")}>
                  <FaStar />
                </Ico>
                <Ico className="text-[#facc15]" title="Smile" onClick={() => addSticker("😀")}>
                  <FaSmile />
                </Ico>
                <Ico className="text-[#f0a91b]" title="Clap" onClick={() => addSticker("👏")}>
                  <PiHandsClappingFill />
                </Ico>
                <Ico className="text-[#fbbf24]" title="Trophy" onClick={() => addSticker("🏆")}>
                  <FaTrophy />
                </Ico>
                <Ico className="text-[#a855f7]" title="Rocket" onClick={() => addSticker("🚀")}>
                  <FaRocket />
                </Ico>
              </Group>

              {/* Kids stickers (boy / girl + hair color) */}
              <Group>
                <button type="button" title="Add a boy" onClick={() => addKid("boy")} className="p-1 hover:scale-110 transition">
                  <KidPreview gender="boy" hair={hairColor} />
                </button>
                <button type="button" title="Add a girl" onClick={() => addKid("girl")} className="p-1 hover:scale-110 transition">
                  <KidPreview gender="girl" hair={hairColor} />
                </button>
                <div className="flex flex-col items-center px-2">
                  <span className="text-[11px] text-slate-400 leading-none mb-1.5">Hair</span>
                  <div className="flex items-center gap-1.5">
                    {HAIR_COLORS.map((h) => (
                      <button
                        key={h.hex}
                        type="button"
                        title={`${h.name} hair`}
                        onClick={() => setHairColor(h.hex)}
                        className={`h-6 w-6 rounded-full border-2 transition hover:scale-125 ${
                          hairColor === h.hex ? "border-white ring-2 ring-cyan-300" : "border-white/30"
                        }`}
                        style={{ background: h.hex }}
                      />
                    ))}
                  </div>
                </div>
              </Group>

              <Group>
                <Ico className="text-cyan-300" title="Send to back" onClick={sendToBack}>
                  <PiTrayLight />
                </Ico>
                <Ico
                  className="text-cyan-300"
                  size="text-2xl"
                  title="Show / hide grid"
                  active={showGrid}
                  onClick={() => setShowGrid((g) => !g)}
                >
                  <BsBricks />
                </Ico>
                <Ico className="text-cyan-300" title="Bring to front" onClick={bringToFront}>
                  <IoFileTray />
                </Ico>
              </Group>
            </div>
          </div>

          {/* ---------- Question Lab panel ---------- */}
          {panelOpen && (
            <div className="shrink-0 w-[23rem] flex flex-col gap-3 max-h-[calc(100vh-7.5rem)] overflow-y-auto pr-1">
              {/* suggestions */}
              <div className="rounded-2xl border border-purple-500/40 bg-[#0a1432]/90 backdrop-blur-xl p-3 shadow-[0_0_24px_rgba(168,85,247,0.2)]">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-extrabold text-cyan-300 neon-text">🧠 Question Lab</h2>
                  <span className="text-xs text-slate-400">{questions.length} questions</span>
                </div>
                {questions.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    Add shapes (circle, triangle, square, star…) or kids 👦👧 to the board — questions will appear automatically!
                  </p>
                ) : (
                  <>
                    <div className="flex flex-col gap-1.5 max-h-56 overflow-y-auto pr-1">
                      {questions.map((q) => {
                        const on = activeQ?.id === q.id;
                        return (
                          <button
                            key={q.id}
                            type="button"
                            disabled={running}
                            onClick={() => selectQuestion(q)}
                            className={`text-left rounded-xl border px-3 py-1.5 transition disabled:opacity-60 ${
                              on
                                ? "border-cyan-300 bg-cyan-400/20 shadow-[0_0_14px_rgba(34,211,238,0.5)]"
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                            }`}
                          >
                            <span className="block text-sm font-semibold text-slate-100">
                              {q.type === "compare" ? "⚖️ " : "🔢 "}
                              {q.text}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {!activeQ && <p className="mt-2 text-xs text-slate-400">👆 Pick a question, then press ▶ Run.</p>}
                  </>
                )}
              </div>

              {/* code */}
              {activeQ && shownProg && (
                <div className="rounded-2xl border border-cyan-400/40 bg-[#0a1432]/90 backdrop-blur-xl p-3 shadow-[0_0_24px_rgba(34,211,238,0.15)]">
                  <p className="text-sm font-bold text-slate-100 mb-2">❓ {activeQ.text}</p>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex rounded-lg overflow-hidden border border-cyan-400/30 text-xs">
                      {(["python", "js"] as Lang[]).map((l) => (
                        <button
                          key={l}
                          type="button"
                          disabled={running}
                          onClick={() => changeLang(l)}
                          className={`px-2.5 py-1 transition ${lang === l ? "bg-cyan-400/30 text-white" : "text-slate-300 hover:bg-white/10"}`}
                        >
                          {l === "python" ? "Python 🐍" : "JavaScript"}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setFast((f) => !f)}
                        title="Speed"
                        className="text-xs px-2 py-1 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
                      >
                        {fast ? "🐇 Fast" : "🐢 Slow"}
                      </button>
                      <button
                        type="button"
                        onClick={onRun}
                        className={`text-sm font-bold px-3 py-1 rounded-lg text-white transition hover:scale-105 ${
                          running ? "bg-red-500" : "bg-gradient-to-r from-emerald-500 to-green-600"
                        }`}
                      >
                        {running ? "⏹ Stop" : "▶ Run"}
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{shownProg.summary}</p>

                  <div className="font-mono text-[12.5px] leading-6 rounded-xl bg-[#040818] border border-cyan-400/20 overflow-x-auto py-1.5">
                    {shownProg.lines.map((l, i) => {
                      const cur = !!trace && !trace.done && trace.line === i;
                      const picked = helpLine === i;
                      return (
                        <div
                          key={i}
                          onClick={() => !running && setHelpLine(picked ? null : i)}
                          className={`flex pr-3 cursor-pointer transition-colors ${
                            cur ? "bg-cyan-400/25 shadow-[inset_3px_0_0_#22d3ee]" : picked ? "bg-purple-500/20" : "hover:bg-white/5"
                          }`}
                        >
                          <span className="w-8 shrink-0 text-right pr-2 text-slate-500 select-none">{i + 1}</span>
                          <code className="whitespace-pre text-slate-100">{codeTokens(l.text)}</code>
                        </div>
                      );
                    })}
                  </div>

                  {explainLine != null && shownProg.lines[explainLine] && (
                    <div className="mt-2 rounded-xl border border-purple-400/30 bg-purple-500/10 px-3 py-2 text-sm text-slate-200">
                      <span className="font-bold text-purple-300">Line {explainLine + 1}: </span>
                      {shownProg.lines[explainLine].help}
                    </div>
                  )}
                  {!trace && helpLine == null && (
                    <p className="mt-2 text-xs text-slate-400">💡 Click any line to see what it means.</p>
                  )}
                </div>
              )}

              {/* live working: variables + output */}
              {activeQ && trace && (
                <div className="rounded-2xl border border-emerald-400/40 bg-[#0a1432]/90 backdrop-blur-xl p-3">
                  <p className="text-sm text-emerald-200 mb-2">👉 {trace.note}</p>
                  {Object.keys(trace.vars).length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {Object.entries(trace.vars).map(([k, v]) => (
                        <div key={k} className="rounded-xl border border-cyan-400/30 bg-white/5 px-3 py-1.5 text-center min-w-[5.5rem]">
                          <div className="text-[11px] text-slate-400 font-mono">📦 {k}</div>
                          <div className="text-2xl font-extrabold text-cyan-300">{v}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="rounded-lg bg-black/40 border border-white/10 font-mono text-xs px-3 py-2">
                    <div className="text-slate-500 mb-0.5">Output:</div>
                    {trace.out.length ? (
                      trace.out.map((o, i) => (
                        <div key={i} className="text-emerald-300">
                          &gt; {o}
                        </div>
                      ))
                    ) : (
                      <span className="text-slate-600">…</span>
                    )}
                  </div>
                  {trace.done && trace.answer && (
                    <div className="mt-2 text-center text-lg font-extrabold text-yellow-300">🎉 {trace.answer}</div>
                  )}
                </div>
              )}

              {/* concepts */}
              <div className="rounded-2xl border border-cyan-400/30 bg-[#0a1432]/90 backdrop-blur-xl p-3">
                <p className="text-sm font-bold text-cyan-300 mb-2">📚 Learn</p>
                <div className="grid grid-cols-2 gap-2">
                  {LEARN.map((c) => {
                    const on = curConcept === c.id;
                    return (
                      <div
                        key={c.id}
                        className={`rounded-xl border px-2.5 py-2 transition ${
                          on ? "border-yellow-300 bg-yellow-300/10 shadow-[0_0_14px_rgba(253,224,71,0.5)] scale-[1.03]" : "border-white/10 bg-white/5"
                        }`}
                      >
                        <p className="text-sm font-bold text-slate-100">
                          {c.icon} {c.title}
                        </p>
                        <p className="text-[11px] text-slate-300 leading-snug mt-0.5">{c.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =================== MODALS =================== */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#02050f]/80 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-transparent to-purple-500 shadow-[0_0_60px_rgba(34,211,238,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0a1432] rounded-3xl p-6 max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-extrabold text-cyan-300 neon-text mb-4">
                {modal === "projects" ? "My Projects" : "Templates"}
              </h2>

              {modal === "projects" && (
                <div className="space-y-3">
                  {projects.length === 0 && (
                    <p className="text-slate-400">No saved projects yet. Click “Save” to save one.</p>
                  )}
                  {projects.map((p) => (
                    <div key={p.id} className="flex items-center justify-between gap-3 rounded-xl border border-cyan-400/20 bg-white/5 px-4 py-3">
                      <div>
                        <p className="font-semibold text-slate-100">{p.name}</p>
                        <p className="text-xs text-slate-400">
                          {new Date(p.updated).toLocaleString()} • {p.objs.length} items
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            loadObjs(p.objs, p.id);
                            setModal(null);
                          }}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-sm font-semibold"
                        >
                          Open
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteProject(p.id)}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm hover:bg-red-500/30"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {modal === "templates" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "flow" as const, name: "Simple Flowchart", desc: "Start → Action → Decision → Output" },
                    { id: "mind" as const, name: "Mind Map", desc: "Main Idea in the middle, notes all around" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        loadObjs(templateObjs(t.id));
                        setModal(null);
                      }}
                      className="text-left rounded-2xl border border-cyan-400/30 bg-white/5 p-4 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition"
                    >
                      <p className="font-bold text-cyan-300">{t.name}</p>
                      <p className="text-sm text-slate-400 mt-1">{t.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              <div className="flex justify-end mt-5">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="px-5 py-2 rounded-full bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* toast */}
      {toast && (
        <div className="toast-in fixed bottom-6 left-1/2 z-[60] px-5 py-2 rounded-full border border-cyan-400/60 bg-[#0a1432] text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.5)]">
          {toast}
        </div>
      )}
    </div>
  );
}
















