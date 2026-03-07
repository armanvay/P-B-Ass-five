// loading spinner
const manageLoading = (status) => {
  const loading = document.getElementById("loading");
  if (status) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
};
let allIssues = [];

// fetch
const allbtnon = async () => {
  manageLoading(true);
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  allIssues = data.data;
  displayimg(allIssues);
};

// display images
const displayimg = (data) => {
  const allimg = document.getElementById("all-img");
  allimg.innerHTML = "";
  document.getElementById("quntti").innerText = data.length;

  data.forEach((datas) => {
    const creatediv = document.createElement("div");
    creatediv.innerHTML = `
      <div onclick="cardDittels(${datas.id})" class="bg-white rounded-xl border border-gray-100 h-[300px] shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
        <div class=" ${datas.status === "open" ? ` h-1.5 bg-green-500` : ` h-1.5 bg-[#A855F7]`} w-full"></div> 
        <div class="p-5">
            <div class="flex justify-between items-center mb-3">
                <div class=" ">
                  ${datas.status === "open" ? ` <img src="/assets/Open-Status.png" alt="">` : ` <img src="/assets/Closed- Status .png" alt="">`}  
                </div>
                <span class="badge badge-sm  bg-red-50 text-red-500 border-red-100 font-bold px-3 py-2 uppercase text-[10px]">${datas.priority}</span>
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

            <div class="pt-4 border-t border-gray-200 flex flex-col gap-1">
                <p class="text-[11px] text-slate-400 font-medium italic">#${datas.id} by ${datas.author}</p>
                <p class="text-[11px] text-slate-400">${datas.updatedAt}</p>
            </div>
        </div>
      </div>
    `;
    allimg.append(creatediv);
  });

  manageLoading(false); // spinner hide after rendering
};



// get the buttons
const allBtn = document.getElementById("btn-all");
const openBtn = document.getElementById("btn-open");
const closedBtn = document.getElementById("btn-closed");
const buttons = [allBtn, openBtn, closedBtn];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("bg-[#6322FF]", "text-white"));
    btn.classList.add("bg-[#6322FF]", "text-white");
  });
});





// filter buttons
document.getElementById("btn-open").addEventListener("click", () => {
  manageLoading(true);
  const openIssues = allIssues.filter((issue) => issue.status === "open");
  displayimg(openIssues);
});

document.getElementById("btn-closed").addEventListener("click", () => {
  manageLoading(true);
  const closedIssues = allIssues.filter((issue) => issue.status === "closed");
  displayimg(closedIssues);
});

document.getElementById("btn-all").addEventListener("click", () => {
  manageLoading(true);
  displayimg(allIssues);
});



// modal digaln
const cardDittels = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

  const res = await fetch(url);
  const derails = await res.json();

  displaydetails(derails.data);

  document.getElementById("word_modal").showModal(); 
};



const displaydetails = (data) => {
  const container = document.getElementById("detils-continer");

  container.innerHTML = `
  
 <div class="p-6">
      <h2 class="text-2xl font-bold text-slate-800">${data.title}</h2>
      <div class="flex gap-2 mt-2 items-center">
        <span class="px-3 py-1 font-bold rounded-full text-white bg-green-500" text-white text-xs font-bold rounded-full">${data.status}</span>
        <p class="text-sm text-slate-500"> ${data.status} by ${data.assignee} : ${data.updatedAt} 22/12/2024</p>
      </div>
      
          <div class="flex flex-wrap gap-2  mt-4">
          ${data.labels
            .map(
              (label) => `
                 <span class="badge badge-outline bg-[#FECACA] border-red-200 text-red-400 text-[10px] font-bold px-2 py-1 uppercase">
               ${label}
               </span> 
  `,
            )
            .join("")}
  </div>
    </div>

    <div class="px-6 pb-6">
      <p class="text-slate-600 leading-relaxed">
        ${data.description}
      </p>
    </div>

    <div class="bg-slate-50 p-6 flex justify-between items-center">
      <div>
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Assignee:</p>
        <p class="font-bold text-slate-800">${data.assignee}</p>
      </div>
      <div class="text-right">
        <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Priority:</p>
        <span class="px-4 py-1 bg-red-500 text-white text-xs font-bold rounded-full">${data.priority}</span>
      </div>
    </div>

  `;
};





// Search 
const searchIssue = async (text) => {
  manageLoading(true);

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`,
  );

  const data = await res.json();

  displayimg(data.data);
};
document.getElementById("input-search").addEventListener("keyup", (e) => {
  const value = e.target.value;

  if (value === "") {
    displayimg(allIssues); 
  } else {
    searchIssue(value);
  }
});


allbtnon();