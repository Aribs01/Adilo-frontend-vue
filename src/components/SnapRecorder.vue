<template>
<Toast position="top-center" />
<div class="grid all-header">
	<div class="recordings-header-container">
		<h4>My Recordings <span>25</span></h4>
	</div>
	<div class="recording-header-buttons">
	
		<Button @click="openModal" icon="pi pi-cloud-upload" label="Start Recording" class="p-button-rounded p-button-danger start-recording-button" />
		<Button @click="openModal" icon="pi pi-video" label="New Request" class="p-button-rounded new-request-button" />
        <Button type="button" icon="pi pi-filter" label="Add filter" class="p-button-outlined add-filter-button" />
        <Button type="button" icon="pi pi-sort-alt" label="By Date" class="p-button-outlined by-date-button" />

	</div>

</div>

<div class="col-12">
	<div class="card">
		<div class="p-fluid formgrid grid">
			<div class="col-12">
				<div class="">
			    	<DataTable :value="recordings" class="mt-3">
			    	  <template #empty>
			    	    Loading Recordings. Please wait...
			    	  </template>
			    	  <template #loading>
			    	    Loading Recordings. Please wait...
			    	  </template>
			    	    <Column field="video" header="Recordings" class="data-table1" headerStyle="color: #21455E;">
							<template #body="{data}">
								<img :src="'images/records/' + data.video" :alt="data.video" class="shadow-2 table-image" width="100" />
			    	      	</template>
						</Column>
			    	    <Column field="title" header="Title" class="data-table2" headerStyle="color: #21455E;"></Column>
			    	    <Column field="views" header="Views" class="data-table3" headerStyle="color: #21455E;"></Column>
			    	    <Column field="size" header="Size" class="data-table3" headerStyle="color: #21455E;"></Column>
			    	    <Column field="modified" header="Last Modified" class="data-table3" headerStyle="color: #21455E;"></Column>
			    	    <Column field="modified" header="" class="data-table3" headerStyle="color: #21455E;">
			    	      <template #body="{data}">
			    	        <button class="p-link fff">
							        	<i class="pi pi-ellipsis-h"></i>
							        </button>
			    	      </template>
			    	    </Column>
			    	</DataTable>
			  	</div>
			</div>
		</div>
	</div>
</div>


<Dialog header="New Recording" class="p-fluid" v-model:visible="addRecordModal" :style="{width: '400px'}" :modal="true">

    <div class="field">
    	<label for="name">Save the recording in</label>
    	<Dropdown :options="projects" optionLabel="name" placeholder="Select a project" v-model="saveLocation" :class="{'p-invalid': submitted && !saveLocation}"></Dropdown>
      	<small class="p-invalid" v-if="submitted && !saveLocation">Project location is required.</small>
    </div>

	<div class="record-screen-switch-container">
		<div class="field">
			<label for="name">Record Screen</label>
			<InputSwitch class="record-screen-switch" v-model="recordScreen" />
		</div>

		<div class="field">
			<label for="name">Record Camera</label>
			<InputSwitch class="record-screen-switch" v-model="recordCamera" />
		</div>

		<div class="field">
			<label for="name">Record Mic</label>
			<InputSwitch class="record-screen-switch" v-model="recordMic" />
		</div>
	
	</div>

      <button class="record-button" icon="pi pi-check" @click="startRecording()" style="width: 60%;">
	  	Start Recording
	  </button>
</Dialog>
</template>

<script>
import RecordingService from '@/service/RecordingServices'
export default{
    setup(){

      return {  }
    },

    data(){
      	return{
        	recordings: [],
			addRecordModal: false,
			projects: [
				{name: "New"},
				{name: "My Project"},
			],
			saveLocation: "",
			submitted: false,
			recordScreen: false,
			recordCamera: false,
        	recordMic: false,
			loading1: false,
			loading2: false,
			loading3: false
        	
      	}
    },
	created() {
		this.recordingService = new RecordingService();
	},

    mounted() {
		this.recordingService.getRecords().then(data => this.recordings = data);
	},

    methods:{
    	openModal() {
    	  this.addRecordModal = true;
    	},	
    	closeModal() {
    	  this.addRecordModal = false;
    	},
		checkCam(recordCamera){
			// console.log(this.recordCamera);
			if(this.recordCamera == true){
				const constraints = (window.constraints = {
					video: true,
					audio: true
				});
				// console.log(constraints);

				navigator.mediaDevices.getUserMedia(constraints).then(stream => {
          			this.loading2 = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          			this.loading2 = false;
					this.recordScreen = false;
					this.recordCamera = false;
					this.recordMic = false;
					alert("This Browser does not support Cam or there might be some issues.");
				});
			}
		},

		startRecording(){
			this.submitted = true;
			if(!this.saveLocation){
            	this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Select Project Location', life: 5000 });
			}
			if(this.recordScreen == false || this.recordCamera == false || this.recordMic == false){
				console.log("false");
            	this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Permission required for media', life: 5000 });
			}
			else{
				this.$router.push({ path: 'recordings' })
				this.checkCam();
			}
		}

    }
}

</script>

<style>
  @import './SnapRecorder.scss';
</style>