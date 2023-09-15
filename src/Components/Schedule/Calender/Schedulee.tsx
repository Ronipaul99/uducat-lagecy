import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react"; // Import EventApi
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { nanoid } from "nanoid";
import { FormGroup, Label, Input } from "reactstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "./custom.css";
import events from "./events";
import CustomModal from "./components/CustomModal";
import { Box } from "@mui/system";
import 'react-calendar/dist/Calendar.css';

interface ScheduleProps {
  Open: boolean; // Define the prop type
}

interface ModalState {
  selectInfo?: any;
  clickInfo?: any;
  state?: string;
  checkInfo?: any;
}

const Schedulee: React.FC<ScheduleProps> = ({Open}) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(events);
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const calendarRef = useRef<any | null>(null);
  const [title, setTitle] = useState<string>("");
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  const handleCloseModal = () => {
    handleClose();
    setModal(false);
  };

  const handleDateClick = (arg: any) => {
    // Implement your logic here
  };

  const handleDateSelect = (selectInfo: any) => {
    if (
      selectInfo.view.type === "timeGridWeek" ||
      selectInfo.view.type === "timeGridDay" ||
      selectInfo.view.type === "dayGridMonth"
    ) {
      selectInfo.view.calendar.unselect();
      setState({ selectInfo, state: "create" });
      console.log("open modal create");
      setStart(selectInfo.start);
      setEnd(selectInfo.end);
      setModal(true);
    }
  };

  const renderEventContent = (eventInfo: any) => {
    return (
      <Box>
        <i
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {eventInfo.event.title}
        </i>
      </Box>
    );
  };

  const handleEventClick = (clickInfo: any) => {
    setState({ clickInfo, state: "update" });
    setTitle(clickInfo.event.title);
    setStart(clickInfo.event.start);
    setEnd(clickInfo.event.end);

    setModal(true);
  };

  const handleEvents = (events: any) => {
    setCurrentEvents(events);
  };

  const handleEventDrop = (checkInfo: any) => {
    setState({ checkInfo, state: "drop" });
    setConfirmModal(true);
  };

  const handleEventResize = (checkInfo: any) => {
    setState({ checkInfo, state: "resize" });
    setConfirmModal(true);
  };

  const handleEdit = () => {
    state.clickInfo?.event?.setStart(start);
    state.clickInfo?.event?.setEnd(end);
    state.clickInfo?.event?.mutate({
      standardProps: { title }
    });
    handleClose();
  };

  const handleSubmit = () => {
    const newEvent = {
      id: nanoid(),
      title,
      start: state.selectInfo?.startStr || start.toISOString(),
      end: state.selectInfo?.endStr || end.toISOString(),
      allDay: state.selectInfo?.allDay || false
    };

    let calendarApi = calendarRef.current?.getApi();

    calendarApi?.addEvent(newEvent);
    handleClose();
  };

  const handleDelete = () => {
    state.clickInfo?.event?.remove();
    handleClose();
  };

  const handleClose = () => {
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setState({});
    setModal(false);
  };

  const [state, setState] = useState<ModalState>({});

  return (
    <div>
      <div className="App" style={{ marginTop: "20px" }}>
        <div>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,today,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            buttonText={{
              today: "current",
              month: "month",
              week: "week",
              day: "day",
              list: "list"
            }}
            initialView="timeGridDay"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={currentEvents}
            select={handleDateSelect}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventsSet={() => handleEvents(events)}
            eventDrop={handleEventDrop}
            eventResize={handleEventResize}
            dateClick={handleDateClick}
            eventAdd={(e: any) => {
              console.log("eventAdd", e);
            }}
            eventChange={(e: any) => {
              console.log("eventChange", e);
            }}
            eventRemove={(e: any) => {
              console.log("eventRemove", e);
            }}
          />
        </div>

        <CustomModal
          title={state.state === "update" ? "Update Event" : "Add Event"}
          isOpen={modal}
          toggle={handleCloseModal}
          onCancel={handleCloseModal}
          onSubmit={state.clickInfo ? handleEdit : handleSubmit}
          submitText={state.clickInfo ? "Update" : "Save"}
          onDelete={state.clickInfo && handleDelete}
          deleteText="Delete"
        >
          <div className="gp">
            <FormGroup className="fm">
              <Label className="t">Title</Label>
              <Input
                type="text"
                name="title"
                className="fm1"
                placeholder="Enter a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>

            <div className="flx">
              <FormGroup className="fm">
                <Label className="t">Start</Label>
                <DateRangePicker
                  initialSettings={{
                    locale: {
                      format: "M/DD hh:mm A"
                    },
                    startDate: start,
                    timePicker: true
                  }}
                  onApply={(event, picker) => {
                    setStart(new Date(picker.startDate));
                  }}
                >
                  <input className="form-control" type="text" />
                </DateRangePicker>
              </FormGroup>

              <FormGroup className="fm">
                <Label className="t">End</Label>
                <DateRangePicker
                  initialSettings={{
                    locale: {
                      format: "M/DD hh:mm A"
                    },
                    endDate: end,
                    timePicker: true
                  }}
                  onApply={(event, picker) => {
                    setEnd(new Date(picker.endDate));
                  }}
                >
                  <input className="form-control" type="text" />
                </DateRangePicker>
              </FormGroup>
            </div>
          </div>
        </CustomModal>

        <CustomModal
          title={state.state === "resize" ? "Resize Event" : "Drop Event"}
          isOpen={confirmModal}
          toggle={() => {
            state.checkInfo?.revert();
            setConfirmModal(false);
          }}
          onCancel={() => {
            state.checkInfo?.revert();
            setConfirmModal(false);
          }}
          cancelText="Cancel"
          onSubmit={() => setConfirmModal(false)}
          submitText={"OK"}
        >
          Do you want to {state.state} this event?
        </CustomModal>
      </div>
    </div>
  );
};

export default Schedulee;
