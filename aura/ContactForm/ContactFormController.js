({
	clickAddContact : function(component, event, helper) {
        let validContact = component.find('contactForm').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validContact) {
            let newContact = component.get('v.newContact');
            helper.createContact(component, newContact);
        }
    }
})