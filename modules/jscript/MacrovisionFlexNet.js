// 
// 

function MacrovisionJob(name, arg, job_id) {
    this.name = name;
    this.arg = arg;
    this.job_id = job_id;
    this.priority=1;
    this.ScheduleInterval=1;
    this.AddFile=function(url, local) { 
	add_alert('Macrovision AddFile() will download ' + url + ' and save it as ' + local);
    }
    this.SetPriority=function(val) {
	this.priority=val;
    }
    this.SetNotifyFlags=function(val) {
	this.notify_flags=val;
    }
}

function MacrovisionFlexNet() {
    this.CreateJob=function(name, arg, job_id) {
	return new MacrovisionJob(name, arg, job_id);
    }
    this.DownloadAndExecute=function(arg0, arg1, arg2, arg3, arg4) {
	if (arg1.length > 512) {
	    add_alert('Macrovision DownloadAndExecute() overflow');
	}
    }
    this.AddFileEx=function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
	if (arg2.length > 512) {
	    add_alert('Macrovision AddFileEx() overflow');
	}
    }
    this.RunScheduledJobs=function() { 
	return; 
    }
}