import Ember from 'ember';

const VISIBLE_MEMBERS_COUNT = 8;

export default Ember.Component.extend({
  classNames: ['project-card-members'],
  tagName: 'ul',

  visibleMembers: Ember.computed('members', function() {
    return this.get('members').slice(0, VISIBLE_MEMBERS_COUNT);
  }),

  totalMembersCount: Ember.computed.alias('members.length'),

  hiddenMembersCount: Ember.computed('totalMembersCount', function() {
    return this.get('totalMembersCount') -  VISIBLE_MEMBERS_COUNT;
  }),

  hiddenMembersExist: Ember.computed('hiddenMembersCount', function() {
    return this.get('hiddenMembersCount') > 0;
  })
});
