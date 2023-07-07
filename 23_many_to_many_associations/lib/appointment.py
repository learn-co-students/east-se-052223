
class Appointment:
    all = []

    def __init__(self, doctor, patient, date, time, location):
        self.date = date
        self.time = time
        self.location = location
        self.patient = patient
        self.doctor = doctor
        Appointment.all.append(self)

    def get_patient(self):
        return self._patient

    def set_patient(self, new_patient):
        from lib.patient import Patient
        if isinstance(new_patient, Patient):
            self._patient = new_patient
        else:
            print('not a valid patient')

    patient = property(get_patient, set_patient)

    def get_doctor(self):
        return self._doctor

    def set_doctor(self, new_doctor):
        from lib.doctor import Doctor
        if isinstance(new_doctor, Doctor):
            self._doctor = new_doctor
        else:
            print("not a valid doctor")

    doctor = property(get_doctor, set_doctor)
