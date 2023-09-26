import {useState} from 'react'

export default function Pres() {
  return (
    <div className="prescription2">
		<div className="top2">
			<h2 className="text-center">Prescription</h2>
		</div>
	<div className="container2">
		<div className="row">
			<div className="col-6">Name of the Patient: </div>
			<div className="col-6">XYZ</div>
		</div>
		<div className="row">
			<div className="col-3">Date of Birth: </div>
			<div className="col-3">dd/mm/yy</div>
			<div className="col-3">Age: </div>
			<div className="col-3">18</div>
		</div>
		<div className="row">
			<div className="col-6">Contact Number: </div>
			<div className="col-6">123456789</div>
		</div>
		<div className="row">
			<div className="col-6">Today's Date: </div>
			<div className="col-6">dd/mm/yy</div>
		</div>
		<div className="row">
			<div className="col-6">Diagnosed with: </div>
			<div className="col-6">Dengue</div>
		</div>
		<div className="row">
			<div className="col-4">Ayurvedic Medicine</div>
			<div className="col-4">Dosage(per day)</div>
			<div className="col-4">Home Remedy</div>
		</div>
		<div className="row">
			<div className="col-4">Brahmi</div>
			<div className="col-4">once per day</div>
			<div className="col-4">Yoga</div>
		</div>
		<div className="row">
			<div className="col-4">Giloy</div>
			<div className="col-4">twice per day</div>
			<div className="col-4">Meditation</div>
		</div>
		<div className="row">
			<div className="col-4">Guggul</div>
			<div className="col-4">once in a week</div>
			<div className="col-4">Exercise</div>
		</div>
		<div className="row">
			<div className="col-6">Diet Chart: </div>
			<div className="col-6">Protien,Carbs</div>
		</div>
		<div className="row">
			<div className="col-6">Yoga: </div>
			<div className="col-6">KapalBhati,SuryaNamaskar</div>
		</div>
	</div>
	</div>
  )
}
