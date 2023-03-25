export function getAppointmentsForDay(state, day) {
  let idArray = [];

  for (const object of state.days) {
    if (object.name === day) {
      idArray = object.appointments.map((x) => x);
    }
  }
  let resultArray = idArray.map((id) => {
    return state.appointments[id];
  });
  return resultArray;
}


export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }

  const interviewerId = interview.interviewer;
  const interviewDetails = {
    student: interview.student,
    interviewer: state.interviewers[interviewerId]
  }

  return interviewDetails;
}