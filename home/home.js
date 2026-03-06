const allimg = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => displayimg(data.data));
};

const displayimg = (data) => {
  const allimg = document.getElementById("all-img");
  allimg.innerHTML = " ";
  // console.log(data)
  data.forEach((datas) => {
    const creatediv = document.createElement("div");
    creatediv.innerHTML = `
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            
            <div class=" ${datas.status === "open" ? ` h-1.5 bg-green-500` : ` h-1.5 bg-[#A855F7]`} w-full"></div> 
            
            <div class="p-5">
                <div class="flex justify-between items-center mb-3">
                    <div class=" ">
                    ${datas.status === "open" ? ` <img src="/assets/Open-Status.png" alt="">` : ` <img src="/assets/Closed- Status .png" alt="">`}  
                     
                     
                    </div>
                    <span class="badge badge-sm bg-red-50 text-red-500 border-red-100 font-bold px-3 py-2 uppercase text-[10px]">${datas.priority}</span>
                </div>

                <h3 class="font-bold text-slate-800 text-sm mb-2 leading-tight">
                    ${datas.title}
                </h3>
                <p class="text-xs text-slate-400 mb-4 line-clamp-2">
                    ${datas.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-6">
              ${datas.labels
                .map(
                  (label) => `
                     <span class="badge badge-outline bg-[#FECACA] border-red-200 text-red-400 text-[10px] font-bold px-2 py-1 uppercase">
                   ${label}
                   </span>
    `,
                )
                .join("")}
</div>

                <div class="pt-4 border-t border-gray-50 flex flex-col gap-1">
                    <p class="text-[11px] text-slate-400 font-medium italic">#1 by ${datas.author}</p>
                    <p class="text-[11px] text-slate-400">${datas.updatedAt}</p>
                </div>
            </div>
        </div>
        
        `;

    allimg.append(creatediv);
  });
};

allimg();


