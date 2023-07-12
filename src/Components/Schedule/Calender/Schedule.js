import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
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



export default function Schedulee(boot) {


  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState(events);
  const [modal, setModal] = useState(false);
  
  // useEffect(() => {
  //   setModal(boot);
  // });

  // console.log(model)
  const [confirmModal, setConfirmModal] = useState(false);
  const calendarRef = useRef(null);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleCloseModal = () => {
    handleClose();
    setModal(false);
  };

  function handleDateClick(arg) {

  }
  function handleDateSelect(selectInfo) {
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
  }
  function renderEventContent(eventInfo) {
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
  }
  function handleEventClick(clickInfo) {
    setState({ clickInfo, state: "update" });
    setTitle(clickInfo.event.title);
    setStart(clickInfo.event.start);
    setEnd(clickInfo.event.end);

    setModal(true);
  }
  function handleEvents(events) {
    setCurrentEvents(events);
  }
  function handleEventDrop(checkInfo) {
    setState({ checkInfo, state: "drop" });
    setConfirmModal(true);
  }
  function handleEventResize(checkInfo) {
    setState({ checkInfo, state: "resize" });
    setConfirmModal(true);
  }
  function handleEdit() {
    state.clickInfo.event.setStart(start);
    state.clickInfo.event.setEnd(end);
    state.clickInfo.event.mutate({
      standardProps: { title }
    });
    handleClose();
  }
  function handleSubmit() {
    const newEvent = {
      id: nanoid(),
      title,
      start: state.selectInfo?.startStr || start.toISOString(),
      end: state.selectInfo?.endStr || end.toISOString(),
      allDay: state.selectInfo?.allDay || false
    };

    let calendarApi = calendarRef.current.getApi();

    calendarApi.addEvent(newEvent);
    handleClose();
  }
  function handleDelete() {
    state.clickInfo.event.remove();
    handleClose();
  }
  function handleClose() {
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setState({});
    setModal(false);
  }
  const [state, setState] = useState({});


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
            // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={() => handleEvents(events)}
            eventDrop={handleEventDrop}
            eventResize={handleEventResize}
            //
            dateClick={handleDateClick}
            eventAdd={(e) => {
              console.log("eventAdd", e);
            }}
            eventChange={(e) => {
              console.log("eventChange", e);
            }}
            eventRemove={(e) => {
              console.log("eventRemove", e);
            }}
          />
        </div>


        {/* POP-up Form */}
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
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input
              type="text"
              name="title"
              placeholder="with a placeholder"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">From - End</Label>
            <DateRangePicker
              initialSettings={{
                locale: {
                  format: "M/DD hh:mm A"
                },
                startDate: start,
                endDate: end,
                timePicker: true
              }}
              onApply={(event, picker) => {
                setStart(new Date(picker.startDate));
                setEnd(new Date(picker.endDate));
              }}
            >
              <input className="form-control" type="text" />
            </DateRangePicker>
          </FormGroup>
        </CustomModal>

        <CustomModal
          title={state.state === "resize" ? "Resize Event" : "Drop Event"}
          isOpen={confirmModal}
          toggle={() => {
            state.checkInfo.revert();
            setConfirmModal(false);
          }}
          onCancel={() => {
            state.checkInfo.revert();
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