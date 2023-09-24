from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post


class PostListViewTests(APITestCase):
    """Post list views test cases"""
    def setUp(self):
        User.objects.create_user(username='eventuser', password='pass')

    def test_can_list_posts(self):
        eventuser = User.objects.get(username='eventuser')
        Post.objects.create(owner=eventuser, title='a title')
        response = self.client.get('/posts/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_create_post(self):
        self.client.login(username='eventuser', password='pass')
        response = self.client.post('/posts/', {'title': 'a title'})
        count = Post.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_post(self):
        response = self.client.post('/posts/', {'title': 'a title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


