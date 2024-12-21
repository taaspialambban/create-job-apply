const getStorageJobApplication = () =>{
const storageJobApplication = localStorage.getItem('job-Application');
if(storageJobApplication){
    return JSON.parse(storageJobApplication)
}
return []
}

const saveStorageJobApplication = id =>{
    const storageJobApplication = getStorageJobApplication();
    const exists = storageJobApplication.find(jobId => jobId === id);
    if(!exists){
        storageJobApplication.push(id);
        localStorage.setItem('job-Application', JSON.stringify(storageJobApplication))
    }
}

export {getStorageJobApplication , saveStorageJobApplication}