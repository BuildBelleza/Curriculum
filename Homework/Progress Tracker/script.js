const view = document.getElementById('view');
const navigation = document.getElementById('navigation');
const progress = document.getElementById('progress');

let position = 0;

const handleNav = e => {
    const nav = e.target.getAttribute('backbut');
    const isForward = nav === 'forward';
    if (isForward) {
        position += 1;
    } else {
        position -= 1;
    }
    SecurityPolicyViolationEvent(position);
};

navigation.addEventListener('click', handleNav);

