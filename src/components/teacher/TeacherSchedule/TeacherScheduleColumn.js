import React from "react";
import TeacherScheduleSlot from "./TeacherScheduleSlot";

function TeacherScheduleColumn(props) {
	const { daySchedule, day } = props;
	return (
		<div className="flex flex-col flex-grow text-center">
			<div className="h-[100px] bg-[#EEECE1] border border-gray-500">
				<h3 className="text-xl font-semibold">
					{day[0] + day.substring(1).toLowerCase()}
				</h3>
			</div>
			{daySchedule.map((session, index) => {
				return <TeacherScheduleSlot key={index} session={session} />;
			})}
		</div>
	);
}

export default TeacherScheduleColumn;
