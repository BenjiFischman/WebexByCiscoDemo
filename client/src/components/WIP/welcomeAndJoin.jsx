/* eslint-disable */
import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const WelcomeAndJoin = ({webex}) => {
  // Inspired by https://github.com/WebexSamples/webex-meetings-quick-start, but the original requirment was to create a room where it happens not a meeting :)
  // Example of a use ref instead of redux
  const joinEl = useRef(null);
  const emailEl = useRef(null);
  const videoMeEl = useRef(null);
  const videoYouEl = useRef(null);
  const audioYouEl = useRef(null);

  function bindMeetingEvents(meeting) {
    meeting.on('error', (err) => {
      console.error(err);
    });

    // Handle media streams changes to ready state
    meeting.on('media:ready', (media) => {
      if (!media) {
        return;
      }
      if (media.type === 'local') {
        videoMeEl.srcObject = media.stream;
      }
      if (media.type === 'remoteVideo') {
        videoYouEl.srcObject = media.stream;
      }
      if (media.type === 'remoteAudio') {
        audioYouEl.srcObject = media.stream;
      }
    });

    // Handle media streams stopping
    meeting.on('media:stopped', (media) => {
      // Remove media streams
      if (media.type === 'local') {
        videoMeEl.srcObject = null;
      }
      if (media.type === 'remoteVideo') {
        videoYouEl.srcObject = null;
      }
      if (media.type === 'remoteAudio') {
        audioYouEl.srcObject = null;
      }
    });
  }

  function joinMeeting(meeting) {
    console.log('init join meetings');

    return meeting.join().then(() => {
      console.log('joined then');

      return meeting.getSupportedDevices({}).then(() => {
        console.log('get supported devices');
        const mediaSettings = {
          receiveVideo: true,
          receiveAudio: true,
          receiveShare: false,
          sendVideo: true,
          sendAudio: true,
          sendShare: false
        };

        console.log('meeting settings');

        // Get our local media stream and add it to the meeting
        return meeting.getMediaStreams(mediaSettings).then((mediaStreams) => {
          const [localStream, localShare] = mediaStreams;

          meeting.addMedia({
            localShare,
            localStream,
            mediaSettings
          });

          console.log('meeting added');
        });
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('clicked submit');

    const destination = joinEl.value;

    webex.meetings.register().catch((err) => {
      console.error(err);
      alert(err);
      throw err;
    });

    const result = webex.meetings.create(destination).then((meeting) => {
      // Call our helper function for binding events to meetings
      bindMeetingEvents(meeting);

      console.log('binded meetings');

      return joinMeeting(meeting);
    });

    console.log('meeting created');

    return result;
  }

  return (
    <div>
      <form id="destination" onClick={(event) => handleSubmit(event)}>
        <input
          id="invitee"
          name="invitee"
          placeholder="Person ID or Email Address or SIP URI or Room ID"
          type="text"
          ref={emailEl}
        />
        <input title="join" type="submit" value="join" ref={joinEl} />
      </form>
      <div styles="display: flex">
        <video
          styles="width:50%"
          id="self-view"
          ref={videoMeEl}
          muted
          autoPlay
        />
        <div styles="width:50%">
          <audio id="remote-view-audio" autoPlay ref={audioYouEl} />
          <video id="remote-view-video" autoPlay ref={videoYouEl} />
        </div>
      </div>
    </div>
  );
};

WelcomeAndJoin.propTypes = {
  webex: PropTypes.any
};
export default WelcomeAndJoin;
