import ipdb

from lib.appointment import Appointment
from lib.doctor import Doctor
from lib.patient import Patient

cardiologist = Doctor('Dr. Bailey', "cardiologist", "MD")
general = Doctor('Dr. Grey', "general", "MD")

jane = Patient("Jane", 70)
john = Patient("John", 39)

ap_1 = Appointment(cardiologist, jane, "7/7/23", "2pm", "Seattle Grace")
# ap_2 = Appointment(cardiologist, john, "8/23/23", "10am", "Seattle Grace")
ap_3 = Appointment(general, john, "8/23/23", "10am", "Seattle Grace")


# test code here
ipdb.set_trace()
