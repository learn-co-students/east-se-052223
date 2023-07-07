from lib.appointment import Appointment


class Doctor:
    def __init__(self, name, specialty, job_title):
        self.name = name
        self.specialty = specialty
        self.job_title = job_title

    def get_job_title(self):
        return self._job_title

    def set_job_title(self, new_title):
        if isinstance(new_title, str):
            self._job_title = new_title
        else:
            raise Exception("Not a string")

    job_title = property(get_job_title, set_job_title)

    @property
    def appointments(self):
        drs_appointments = []

        for appointment in Appointment.all:
            if appointment.doctor == self:
                drs_appointments.append(appointment)

        return drs_appointments

    @property
    def patients(self):
        drs_patients = []

        for appointment in self.appointments:
            drs_patients.append(appointment.patient)

        return drs_patients
    # appointments = property(get_appointments)


new_doctor = Doctor("Dr. Doolittle", "talking to animals", "Vetinarian")
